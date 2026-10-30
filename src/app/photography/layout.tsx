import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';
import MotionProvider from '@/components/photography/MotionProvider';

// Self-hosted for the same reason as the root layout's fonts (see there).
const display = localFont({
  src: '../../fonts/bricolage-grotesque-latin-wght.woff2',
  variable: '--font-display',
  weight: '200 800',
});

export default function PhotographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <div className={display.variable}>
        <MotionProvider>{children}</MotionProvider>
      </div>
    </ViewTransitions>
  );
}
