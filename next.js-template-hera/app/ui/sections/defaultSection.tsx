// @/app/ui/sections/defaultSection.tsx

import React from 'react';
import { useTranslations } from 'next-intl';

const DefaultSection = () => {
  const t = useTranslations('DefaultSection');
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{t('Paragraph')}</p>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Article.Title')}</h4>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('Article.Paragraph-1')}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {t('Article.Paragraph-2')}
        </p>
      </article>
    </section>
  );
};

export default DefaultSection;
