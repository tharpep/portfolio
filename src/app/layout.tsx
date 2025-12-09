import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConditionalNav from "@/components/ConditionalNav";
import ConditionalFooter from "@/components/ConditionalFooter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-neutral-900 relative`}
        suppressHydrationWarning={true}
      >
        {/* Site-wide gradient background - consistent across all pages */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Primary gradient - subtle, gradually fades throughout page */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/3 via-cyan-500/1.5 via-cyan-500/0.5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_var(--tw-gradient-stops))] from-cyan-500/4 via-cyan-500/1.5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/1.5 via-transparent to-blue-500/0.5" />
        </div>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-neutral-900 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <ConditionalNav />
        {children}
        <ConditionalFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
