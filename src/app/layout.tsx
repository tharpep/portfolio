import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { PageTransitions } from "@/components/PageTransitions";
import ConditionalNav from "@/components/ConditionalNav";
import ConditionalFooter from "@/components/ConditionalFooter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

// Self-hosted (latin, variable weight; from Fontsource, OFL licenses beside the files) so builds
// never fetch from Google Fonts: on some Vercel build machines Google returns font addresses that
// next/font/google can't parse, and the build fails.
const inter = localFont({
  src: "../fonts/inter-latin-wght.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/geist-mono-latin-wght.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pryce Tharpe – Software Engineer",
  description: "AI Acceleration Fellow at Eli Lilly specializing in AI, cloud systems, and full-stack development.",
  keywords: ["Pryce Tharpe", "Software Engineer", "Computer Engineering", "Purdue University", "Eli Lilly", "AI", "Azure", "React", "Python", "Full Stack Developer", "DevOps", "Cloud Engineering"],
  authors: [{ name: "Pryce Tharpe" }],
  creator: "Pryce Tharpe",
  publisher: "Pryce Tharpe",
  metadataBase: new URL('https://pryce-tharpe.dev'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pryce Tharpe Portfolio',
    title: 'Pryce Tharpe – Software Engineer',
    description: 'AI Acceleration Fellow at Eli Lilly specializing in AI, cloud systems, and full-stack development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pryce Tharpe – Software Engineer',
    description: 'AI Acceleration Fellow at Eli Lilly specializing in AI, cloud systems, and full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'view-transition': 'same-origin',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body
        className="antialiased min-h-screen flex flex-col bg-neutral-900 relative"
        suppressHydrationWarning={true}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-neutral-900 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pryce Tharpe",
              "url": "https://pryce-tharpe.dev",
              "sameAs": [
                "https://www.linkedin.com/in/pryce-tharpe",
                "https://github.com/tharpep",
                "https://www.instagram.com/pryce_tharpe/"
              ],
              "jobTitle": "AI Acceleration Fellow",
              "worksFor": {
                "@type": "Organization",
                "name": "Eli Lilly"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Purdue University"
              },
              "knowsAbout": ["Software Engineering", "AI", "Cloud Computing", "Full Stack Development", "DevOps", "Python", "React", "Azure"],
              "description": "AI Acceleration Fellow at Eli Lilly specializing in AI, cloud systems, and full-stack development."
            })
          }}
        />
        <PageTransitions>
          <ConditionalNav />
          {children}
          <ConditionalFooter />
        </PageTransitions>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
