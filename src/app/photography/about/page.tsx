import PhotoNav from '@/components/PhotoNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About – Photography – Pryce Tharpe',
  description: 'About the photography of Pryce Tharpe.',
  alternates: { canonical: '/photography/about' },
};

export default function PhotographyAbout() {
  return (
    <>
      <PhotoNav />
      <main className="min-h-screen bg-white">
        <div className="px-6 md:px-12 lg:px-16 pt-16 pb-24 max-w-2xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-medium text-gray-900 mb-8 leading-tight">
            About
          </h1>
          <div className="border-t border-gray-200 mb-10" />

          <div className="space-y-6 text-gray-600 leading-relaxed text-base">
            <p>
              I started shooting in college — mostly on a phone, then a borrowed DSLR. What
              kept me coming back was less about the gear and more about the habit of paying
              attention. Photography forced me to slow down and actually look at what was in
              front of me, which turned out to be a useful discipline for someone who spends
              most of his time thinking about systems and code.
            </p>
            <p>
              I&apos;m drawn to the moment just before or just after something happens —
              the stillness around motion, the light that lasts for thirty seconds before it&apos;s
              gone. I shoot landscapes, wildlife, and cities with the same underlying interest:
              finding the frame where something true shows through. I tend to underexpose
              slightly and sort out the rest in Lightroom.
            </p>
            <p>
              Most of what I shoot lives on my phone or hard drive and never gets posted.
              The collections here are the ones worth sharing. If you want to see more as it
              happens, Instagram is the best place.{' '}
              <a
                href="https://www.instagram.com/pryce_tharpe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
              >
                @pryce_tharpe &rarr;
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
