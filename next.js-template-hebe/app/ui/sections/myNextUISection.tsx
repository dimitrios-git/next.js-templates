// @/app/ui/sections/myNextUISection.tsx

import React from 'react';
import { useTranslations } from 'next-intl';

const MyNextUISection = () => {
  const t = useTranslations('MyNextUISection');

  return (
    <section className="bg-warning-500 text-default p-6 rounded shadow-md mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2">{t('Paragraph')}</p>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Article.Title')}</h4>
        <p className="mt-2">{t('Article.Paragraph-1')}</p>
        <p className="mt-2">{t('Article.Paragraph-2')}</p>
      </article>
    </section>
  );
};

export default MyNextUISection;
