// @/app/ui/components/myNextUINavbar.tsx

'use client';

import React from 'react';
import {
  Dropdown,
  NavbarMenu,
  NavbarMenuItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Divider,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from '@nextui-org/react';
import { MdTranslate } from 'react-icons/md';
import { ThemeSwitcher } from '@/app/ui/components/themeSwitcher';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname from next/navigation

export interface MyNextUINavbarProps {
  translations: {
    brand: string;
    navLink: string;
    languageMenu: string;
  };
}

const MyNextUINavbar = ({ translations }: MyNextUINavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supportedLocales = ['en-US', 'de-DE'];

  const getCurrentLocale = () => {
    const localePrefix = pathname.split('/')[1];
    return supportedLocales.includes(localePrefix) ? localePrefix : 'en-US';
  };

  const switchLocale = (locale: string) => {
    const currentLocale = getCurrentLocale();
    const newPathname = pathname.replace(`/${currentLocale}`, '') || '/';
    router.push(`/${locale}${newPathname}`);
  };

  return (
    <Navbar
      isBordered={false}
      isBlurred={true} // Safari is having issues with backdrop-filter
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">{translations.brand}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            {translations.navLink} 1
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {translations.navLink} 2
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex space-x-4">
          <Dropdown>
            <DropdownTrigger>
              <div className="cursor-pointer flex items-center">
                <MdTranslate />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label={translations.languageMenu}>
              <DropdownItem key="en-US" onClick={() => switchLocale('en-US')}>
                🇺🇸 English
              </DropdownItem>
              <DropdownItem key="de-DE" onClick={() => switchLocale('de-DE')}>
                🇩🇪 Deutsch
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>
      <NavbarMenu>
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <NavbarMenuItem className="sm:hidden">
              <Link color="foreground" href="#">
                {translations.navLink} 1
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="sm:hidden" isActive>
              <Link href="#" aria-current="page">
                {translations.navLink} 2
              </Link>
            </NavbarMenuItem>
            <Divider orientation="horizontal" className="my-4 sm:hidden" />
            <NavbarMenuItem>
              <Link color="foreground" onClick={() => switchLocale('en-US')}>
                🇺🇸 English
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" onClick={() => switchLocale('de-DE')}>
                🇩🇪 Deutsch
              </Link>
            </NavbarMenuItem>
            <Divider orientation="horizontal" className="my-4" />
            <NavbarMenuItem className="flex justify-center">
              <ThemeSwitcher />
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNextUINavbar;
