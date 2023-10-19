import {DateLabel, Wrapper} from "./styles.ts";
import {useEffect, useState} from "react";
import {format, subMonths, subWeeks, subYears} from 'date-fns';
import {DateRangePicker} from 'rsuite';
import {useStock} from "../../../../hooks/useStocks.tsx";

enum CalendarButton {
    WEEK = 1,
    MONTH = 2,
    YEAR = 3,
    CUSTOM = 0
}


export const ButtonsDate = () => {
    const [itemSelected, setItemSelected] = useState<CalendarButton>();
    const {
        getHistoryOfStock,
        stockDetail
    } = useStock();

    const labels = [{
        label: '1S',
        value: CalendarButton.WEEK
    }, {
        label: '1M',
        value: CalendarButton.MONTH
    }, {
        label: '1A',
        value: CalendarButton.YEAR
    }];

    function getDateRange(type: CalendarButton) {
        const today: Date = new Date();

        let to: Date;

        switch (type) {
            case CalendarButton.WEEK:
                to = subWeeks(today, 1);
                break;

            case CalendarButton.MONTH:
                to = subMonths(today, 1);
                break;

            case CalendarButton.YEAR:
                to = subYears(today, 1);
                break;

            default:
                throw new Error('Invalid CalendarButton type');
        }

        return {
            from: format(today, 'yyyy-MM-dd'),
            to: format(to, 'yyyy-MM-dd')
        };
    }

    const handleButtonClick = (value: CalendarButton) => {
        if (value === CalendarButton.CUSTOM) {
            setItemSelected(value);
            return
        }
        setItemSelected(value);
        const {from, to} = getDateRange(value);
        getHistoryOfStock(from, to);
    };

    useEffect(() => {
        handleButtonClick(1)
    }, [stockDetail])

    return (
        <Wrapper>
            {labels.map((item) => (
                <DateLabel
                    key={item.value}
                    onClick={() => handleButtonClick(item.value)}
                    isActive={itemSelected === item.value}
                >
                    {item.label}
                </DateLabel>
            ))}
            <DateRangePicker placeholder={'Selecione um período'}/>
        </Wrapper>
    )
}
