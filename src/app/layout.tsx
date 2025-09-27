import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConditionalNav from "@/components/ConditionalNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pryce Tharpe - Software Engineer & Computer Engineering Student",
  description: "Senior Computer Engineering student at Purdue University specializing in AI, cloud systems, and full-stack development. Experienced with Azure, React, Python, and embedded systems. Seeking full-time software engineering roles.",
  keywords: ["Pryce Tharpe", "Software Engineer", "Computer Engineering", "Purdue University", "AI", "Azure", "React", "Python", "Full Stack Developer", "DevOps", "Cloud Engineering"],
  authors: [{ name: "Pryce Tharpe" }],
  creator: "Pryce Tharpe",
  publisher: "Pryce Tharpe",
  metadataBase: new URL('https://pryce-tharpe.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pryce Tharpe Portfolio',
    title: 'Pryce Tharpe - Software Engineer & Computer Engineering Student',
    description: 'Senior Computer Engineering student at Purdue University specializing in AI, cloud systems, and full-stack development. View my projects and experience.',
    images: [
      {
        url: '/vercel.svg',
        width: 1200,
        height: 630,
        alt: 'Pryce Tharpe - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pryce Tharpe - Software Engineer & Computer Engineering Student',
    description: 'Senior Computer Engineering student at Purdue University specializing in AI, cloud systems, and full-stack development.',
    images: ['/vercel.svg'],
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
  verification: {
    google: 'your-google-verification-code',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pryce Tharpe",
              "url": "https://pryce-tharpe.dev",
              "sameAs": [
                "https://www.linkedin.com/in/pryce-tharpe",
                "https://github.com/prycetharpe",
                "https://www.instagram.com/pryce_tharpe/"
              ],
              "jobTitle": "Computer Engineering Student",
              "worksFor": {
                "@type": "Organization",
                "name": "Mesh Systems"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Purdue University"
              },
              "knowsAbout": ["Software Engineering", "AI", "Cloud Computing", "Full Stack Development", "DevOps", "Python", "React", "Azure"],
              "description": "Senior Computer Engineering student at Purdue University specializing in AI, cloud systems, and full-stack development."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-neutral-900 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <ConditionalNav />
        {children}
        <div className="mt-auto border-t border-neutral-800/60 bg-neutral-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-500">
              <div>© {new Date().getFullYear()} Pryce Tharpe</div>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:tharpep_pro@outlook.com"
                  className="hover:text-neutral-300 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  tharpep_pro@outlook.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/pryce-tharpe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
