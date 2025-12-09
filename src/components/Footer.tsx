import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800/50 bg-neutral-900 mt-auto">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">

          {/* Left: Copyright */}
          <p className="text-center sm:text-left">
            © {currentYear} Pryce Tharpe
          </p>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/PryceTharpe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pryce-tharpe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tharpep_pro@outlook.com"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
