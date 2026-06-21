'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Photography has its own footer and aesthetic world.
  if (pathname.startsWith('/photography')) {
    return null;
  }

  return <Footer />;
}
