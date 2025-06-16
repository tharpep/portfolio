import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-4 p-4 text-sm">
      <Link href="/" className="font-semibold">
        Home
      </Link>
      <Link href="/projects">Projects</Link>
      <Link href="/photography">Photography</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
