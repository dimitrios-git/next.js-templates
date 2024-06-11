// @/app/ui/components/myNextUIDemoTable.tsx

'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from '@nextui-org/react';

type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

const colors: Color[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

export interface MyNextUIDemoTableProps {
  translations: {
    table: {
      header: {
        name: string;
        role: string;
        status: string;
      };
      rows: {
        row_1: {
          name: string;
          role: string;
          status: string;
        };
        row_2: {
          name: string;
          role: string;
          status: string;
        };
        row_3: {
          name: string;
          role: string;
          status: string;
        };
        row_4: {
          name: string;
          role: string;
          status: string;
        };
      };
      labels: {
        ariaLabel: string;
        selectionColor: string;
      };
    };
  };
}

const MyNextUIDemoTable: React.FC<MyNextUIDemoTableProps> = ({
  translations,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>('default');
  const [isHydrated, setIsHydrated] = useState(false);

  // Ensure hydration is complete before making client-only updates
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="flex flex-col gap-3 mt-4">
      {isHydrated && (
        <>
          <Table
            color={selectedColor}
            selectionMode="multiple"
            defaultSelectedKeys={['2', '3']}
            aria-label={translations.table.labels.ariaLabel}
          >
            <TableHeader>
              <TableColumn key="name">
                {translations.table.header.name}
              </TableColumn>
              <TableColumn key="role">
                {translations.table.header.role}
              </TableColumn>
              <TableColumn key="status">
                {translations.table.header.status}
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell key="1-name">
                  {translations.table.rows.row_1.name}
                </TableCell>
                <TableCell key="1-role">
                  {translations.table.rows.row_1.role}
                </TableCell>
                <TableCell key="1-status">
                  {translations.table.rows.row_1.status}
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell key="2-name">
                  {translations.table.rows.row_2.name}
                </TableCell>
                <TableCell key="2-role">
                  {translations.table.rows.row_2.role}
                </TableCell>
                <TableCell key="2-status">
                  {translations.table.rows.row_2.status}
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell key="3-name">
                  {translations.table.rows.row_3.name}
                </TableCell>
                <TableCell key="3-role">
                  {translations.table.rows.row_3.role}
                </TableCell>
                <TableCell key="3-status">
                  {translations.table.rows.row_3.status}
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell key="4-name">
                  {translations.table.rows.row_4.name}
                </TableCell>
                <TableCell key="4-role">
                  {translations.table.rows.row_4.role}
                </TableCell>
                <TableCell key="4-status">
                  {translations.table.rows.row_4.status}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <RadioGroup
            label={translations.table.labels.selectionColor}
            orientation="horizontal"
            value={selectedColor}
            onValueChange={(value) => setSelectedColor(value as Color)}
          >
            {colors.map((color) => (
              <Radio
                key={color}
                color={color}
                value={color}
                className="capitalize"
              >
                {color}
              </Radio>
            ))}
          </RadioGroup>
        </>
      )}
    </div>
  );
};

export default MyNextUIDemoTable;
