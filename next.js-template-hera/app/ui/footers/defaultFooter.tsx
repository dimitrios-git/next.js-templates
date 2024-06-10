// @/app/ui/footers/defaultFooter.tsx

import { useTranslations } from 'next-intl';

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('DefaultFooter');

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>
        &copy; {currentYear} {t('Copyright.Name')}.{' '}
        {t('Copyright.AllRightsReserved')}.
      </p>
    </footer>
  );
};

export default DefaultFooter;
