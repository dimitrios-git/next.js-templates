// @/app/ui/mains/myNextUIMain.tsx

import MyNextUISection from '@/app/ui/sections/myNextUISection';
import MyNextUIAside from '@/app/ui/asides/myNextUIAside';
import { useTranslations } from 'next-intl';
import MyNextUIDemo from '@/app/ui/sections/myNextUIDemo';

const MyNextUIMain = () => {
  const t = useTranslations('MyNextUIMain');

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row lg:container dark:text-gray-100">
        <main className="flex-grow md:w-3/4">
          <h2 className="text-3xl font-bold">{t('Title')}</h2>
          <p className="m-2">{t('Paragraph-1')}</p>
          <p className="m-2">{t('Paragraph-2')}</p>
          <MyNextUISection />
          <MyNextUIDemo />
        </main>
        <MyNextUIAside className="md:w-1/4 md:ml-4 mt-4 md:mt-0" />
      </div>
    </div>
  );
};

export default MyNextUIMain;
