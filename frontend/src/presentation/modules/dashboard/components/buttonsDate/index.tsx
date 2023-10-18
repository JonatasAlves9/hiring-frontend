import {Date, Icon, Wrapper} from "./styles.ts";

import {faCalendar} from "@fortawesome/free-solid-svg-icons";

export const ButtonsDate = () => {
    return (
        <Wrapper>
            <Date isActive>1S</Date>
            <Date>1M</Date>
            <Date>1A</Date>
            <Icon icon={faCalendar}/>
        </Wrapper>
    )
}
