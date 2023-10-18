import {Wrapper} from "./styles.ts";
import {Outlet} from "react-router-dom";
import {TopBar} from "../topbar";

export const PageWrapper = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Outlet/>
        </Wrapper>
    )
}
