import {DateLabel, Icon, Wrapper} from "./styles.ts";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {format, subMonths, subWeeks, subYears} from 'date-fns';

enum CalendarButton {
    WEEK = 1,
    MONTH = 2,
    YEAR = 3,
    CUSTOM = 0
}

interface IProps {
    getHistoryOfStock: (from: string, to: string) => void
}

export const ButtonsDate = ({getHistoryOfStock}: IProps) => {
    const [itemSelected, setItemSelected] = useState<CalendarButton>();

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
            <Icon icon={faCalendar} isActive={itemSelected === 0} onClick={() => handleButtonClick(0)}/>
        </Wrapper>
    )
}
