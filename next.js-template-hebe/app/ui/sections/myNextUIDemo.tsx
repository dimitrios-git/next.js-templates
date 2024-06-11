// @/app/ui/sections/myNextUIDemo.tsx

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button, Divider, Spinner, Image } from '@nextui-org/react';
import MyNextUIDemoTable from '@/app/ui/components/myNextUIDemoTable';

const MyNextUIDemo = () => {
  const t = useTranslations('MyNextUIDemo');

  const tableTranslations = {
    table: {
      header: {
        name: t('Table.Header.Name'),
        role: t('Table.Header.Role'),
        status: t('Table.Header.Status'),
      },
      rows: {
        row_1: {
          name: t('Table.Rows.Row-1.Name'),
          role: t('Table.Rows.Row-1.Role'),
          status: t('Table.Rows.Row-1.Status'),
        },
        row_2: {
          name: t('Table.Rows.Row-2.Name'),
          role: t('Table.Rows.Row-2.Role'),
          status: t('Table.Rows.Row-2.Status'),
        },
        row_3: {
          name: t('Table.Rows.Row-3.Name'),
          role: t('Table.Rows.Row-3.Role'),
          status: t('Table.Rows.Row-3.Status'),
        },
        row_4: {
          name: t('Table.Rows.Row-4.Name'),
          role: t('Table.Rows.Row-4.Role'),
          status: t('Table.Rows.Row-4.Status'),
        },
      },
      labels: {
        ariaLabel: t('Table.Labels.AriaLabel'),
        selectionColor: t('Table.Labels.SelectionColor'),
      },
    },
  };

  return (
    <section className="p-6 mt-4">
      <h3 className="text-2xl font-bold">{t('Title')}</h3>
      <p className="mt-2">{t('Paragraph')}</p>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Colors.Title')}</h4>
        <p className="mt-2">{t('Colors.Paragraph')}</p>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Button color="default">{t('Colors.Default')}</Button>
          <Button color="primary">{t('Colors.Primary')}</Button>
          <Button color="secondary">{t('Colors.Secondary')}</Button>
          <Button color="success">{t('Colors.Success')}</Button>
          <Button color="warning">{t('Colors.Warning')}</Button>
          <Button color="danger">{t('Colors.Danger')}</Button>
          <Divider />
          <Spinner
            label={t('Colors.Default')}
            color="default"
            labelColor="foreground"
          />
          <Spinner
            label={t('Colors.Primary')}
            color="primary"
            labelColor="primary"
          />
          <Spinner
            label={t('Colors.Secondary')}
            color="secondary"
            labelColor="secondary"
          />
          <Spinner
            label={t('Colors.Success')}
            color="success"
            labelColor="success"
          />
          <Spinner
            label={t('Colors.Warning')}
            color="warning"
            labelColor="warning"
          />
          <Spinner
            label={t('Colors.Danger')}
            color="danger"
            labelColor="danger"
          />
          <Divider />
          <ul className="flex flex-wrap gap-4 items-center">
            <li className="text-blue-500">{t('Colors.Blue')}</li>
            <li className="text-purple-500">{t('Colors.Purple')}</li>
            <li className="text-green-500">{t('Colors.Green')}</li>
            <li className="text-red-500">{t('Colors.Red')}</li>
            <li className="text-pink-500">{t('Colors.Pink')}</li>
            <li className="text-yellow-500">{t('Colors.Yellow')}</li>
            <li className="text-zinc-500">{t('Colors.Zinc')}</li>
            <li className="text-myteal-500">{t('Colors.MyTeal')}</li>
          </ul>
        </div>
        <MyNextUIDemoTable translations={tableTranslations} />
      </article>
      <article className="my-6">
        <h4 className="text-xl font-bold">{t('Images.Title')}</h4>
        <p className="mt-2">{t('Images.Paragraph')}</p>
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Image
            isBlurred
            width={240}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
            className="m-5"
          />
        </div>
      </article>
    </section>
  );
};

export default MyNextUIDemo;
