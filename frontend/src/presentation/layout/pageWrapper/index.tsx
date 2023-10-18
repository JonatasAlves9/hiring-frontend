import {Wrapper} from "./styles.ts";
import {Outlet} from "react-router-dom";

export const PageWrapper = () => {
    return (
        <Wrapper>
            <Outlet/>
        </Wrapper>
    )
}
