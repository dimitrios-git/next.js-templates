// @/app/ui/asides/myNextUIAside.tsx

import { useTranslations } from 'next-intl';
import React from 'react';

interface MyNextUIAsideProps {
  className?: string;
}

const MyNextUIAside: React.FC<MyNextUIAsideProps> = ({ className }) => {
  const t = useTranslations('MyNextUIAside');

  return (
    <aside
      className={`p-4 border border-myteal-200 dark:border-myteal-700 rounded ${className}`}
    >
      <h3 className="text-lg font-bold">{t('Title')}</h3>
      <p className="mt-2">{t('Paragraph')}</p>
    </aside>
  );
};

export default MyNextUIAside;
