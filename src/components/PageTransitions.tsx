"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, startTransition, use, useEffect, useRef, type ComponentProps, type MouseEvent } from "react";

/**
 * Fades between pages when a link is clicked, using the View Transitions API
 * (timing lives in the ::view-transition rules in globals.css).
 *
 * Back/forward are deliberately left to the browser: animating them fights its
 * scroll restoration (the page lands in the wrong place) and doubles up with
 * the iOS swipe-back animation. The photography section keeps its own
 * `next-view-transitions` provider for its photo morphs.
 */

type Finish = { current: (() => void) | null };
const FinishContext = createContext<Finish | null>(null);

export function PageTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const finish = useRef<() => void>(null);

  // The new route has rendered: let the browser capture it and run the fade.
  useEffect(() => {
    finish.current?.();
    finish.current = null;
  }, [pathname]);

  return <FinishContext value={finish}>{children}</FinishContext>;
}

const isPlainClick = (e: MouseEvent<HTMLAnchorElement>) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

export function Link({ onClick, href, replace, scroll, ...props }: ComponentProps<typeof NextLink>) {
  const router = useRouter();
  const pathname = usePathname();
  const finish = use(FinishContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !finish || typeof href !== "string" || !isPlainClick(e)) return;
    if (props.target && props.target !== "_self") return;
    if (!("startViewTransition" in document)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const url = new URL(href, location.href);
    // Same page (hash or query change) or another site: let Next/the browser handle it.
    if (url.origin !== location.origin || url.pathname === pathname) return;

    e.preventDefault();
    document.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          finish.current = resolve;
          // Never leave the screen frozen if the route fails to render.
          setTimeout(resolve, 1500);
          startTransition(() => {
            if (replace) router.replace(href, { scroll });
            else router.push(href, { scroll });
          });
        })
    );
  };

  return <NextLink href={href} replace={replace} scroll={scroll} onClick={handleClick} {...props} />;
}
