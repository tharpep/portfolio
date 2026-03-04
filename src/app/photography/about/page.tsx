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
              When I was younger, art was a big part of my life. Most of all, I loved to draw. 
              I would draw what I saw, and eventually started working from photos I liked. After 
              a while, I realized how much I loved the art behind the image itself. I started 
              shooting in middle school on a Pixel 2 Pro, which I got just for the sake of 
              starting photography. In high school I took it further. I took a few classes and got 
              my first real camera, a Nikon D3500. Then it kept growing and truly became a passion.
            </p>
            <p>
              In college I started traveling more, and photography became how I process each trip.
              I shoot it all, but it always comes back to travel. Every place has a rhythm to it,
              and I like trying to catch a piece of that. I shoot on a Sony A7C now and bring it
              pretty much everywhere.
            </p>
            <p>
              Photography is how I see the world. It&apos;s a way to share my perspective and hold 
              onto moments that matter to me. A lot of what I shoot doesn&apos;t get posted, so I 
              made this site to share the work properly. If you want to see more as it 
              happens, Instagram is the best place — it&apos;s more of a time capsule for me, 
              where I process the memories.{' '}
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
