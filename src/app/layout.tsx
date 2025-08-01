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
  metadataBase: new URL('https://prycetharpe.com'),
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
              "url": "https://prycetharpe.com",
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
      >
        <ConditionalNav />
        {children}
      </body>
    </html>
  );
}
