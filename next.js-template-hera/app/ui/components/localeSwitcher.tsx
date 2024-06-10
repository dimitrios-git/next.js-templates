// @/app/ui/components/localeSwitcher.tsx

'use client';

import React from 'react';
import { Link } from '@/navigation';
import { usePathname } from '@/navigation';

const LocaleSwitcher = () => {
  const pathname = usePathname();
  return (
    <div className="flex space-x-10">
      <Link href={pathname} locale="en-US">
        🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
      </Link>
      <Link href={pathname} locale="de-DE">
        🇩🇪 Deutsch
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
