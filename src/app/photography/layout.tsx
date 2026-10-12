import { Bricolage_Grotesque } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import MotionProvider from '@/components/photography/MotionProvider';

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
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
