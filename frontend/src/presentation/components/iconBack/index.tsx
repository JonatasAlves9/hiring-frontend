import {Icon, Wrapper} from "./styles.ts";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const IconBack = () => {
    return (
        <Wrapper>
            <Icon icon={faArrowLeft}/>
        </Wrapper>
    )
}
