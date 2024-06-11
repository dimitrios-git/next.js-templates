// @/app/[locale]/page.tsx

import MyNextUIHeader from '@/app/ui/headers/myNextUIHeader';
import MyNextUIMain from '@/app/ui/mains/myNextUIMain';
import MyNextUIFooter from '@/app/ui/footers/myNextUIFooter';
interface HomeProps {
  params: { locale: string };
}

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <>
      <MyNextUIHeader />
      <MyNextUIMain />
      <MyNextUIFooter />
    </>
  );
}
