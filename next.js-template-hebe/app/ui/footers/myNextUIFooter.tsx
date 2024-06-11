// @/app/ui/footers/myNextUIFooter.tsx

import { useTranslations } from 'next-intl';

const MyNextUIFooter = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('MyNextUIFooter');

  return (
    <footer className="dark:text-white p-4 text-center">
      <p>
        &copy; {currentYear} {t('Copyright.Name')}.{' '}
        {t('Copyright.AllRightsReserved')}.
      </p>
    </footer>
  );
};

export default MyNextUIFooter;
