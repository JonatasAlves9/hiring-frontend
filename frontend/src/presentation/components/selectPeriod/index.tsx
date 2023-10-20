import { DateLabel, Wrapper } from './styles';
import React, { useEffect, useState } from 'react';
import { subMonths, subWeeks, subYears } from 'date-fns';
import { DateRangePicker } from 'rsuite';
import { useStock } from '../../hooks/useStocks';

enum Period {
  Custom = 0,
  Week = 1,
  Month = 2,
  Year = 3,
}

interface Label {
  label: string;
  value: Period;
}

const LABELS: Label[] = [
  { label: '1S', value: Period.Week },
  { label: '1M', value: Period.Month },
  { label: '1A', value: Period.Year },
];

const getDateRange = (type: Period) => {
  const today = new Date();

  switch (type) {
    case Period.Week:
      return { from: subWeeks(today, 1), to: today };
    case Period.Month:
      return { from: subMonths(today, 1), to: today };
    case Period.Year:
      return { from: subYears(today, 1), to: today };
    default:
      throw new Error('Invalid period type');
  }
};

export const SelectPeriod: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Period>(Period.Week);
  const { getHistoryOfStock, stockDetail } = useStock();

  const handleButtonClick = (value: Period) => {
    setSelectedItem(value);

    if (value === Period.Custom) {
      return;
    }

    const { from, to } = getDateRange(value);
    getHistoryOfStock(from, to);
  };

  useEffect(() => {
    handleButtonClick(Period.Week);
  }, [stockDetail]);

  return (
    <Wrapper>
      {LABELS.map((item) => (
        <DateLabel
          key={item.value}
          onClick={() => handleButtonClick(item.value)}
          isActive={selectedItem === item.value}
        >
          {item.label}
        </DateLabel>
      ))}
      <DateRangePicker
        placeholder={'Selecione um período'}
        onChange={(e) => {
          if (e !== null) {
            getHistoryOfStock(e[0], e[1]);
            handleButtonClick(Period.Custom);
          }
        }}
      />
    </Wrapper>
  );
};
