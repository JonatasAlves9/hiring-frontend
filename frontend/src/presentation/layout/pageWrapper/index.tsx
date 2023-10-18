import {Wrapper} from "./styles.ts";
import {Outlet} from "react-router-dom";
import {TopBar} from "../topbar";
import {Content} from "../content";

export const PageWrapper = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <Outlet/>
            </Content>
        </Wrapper>
    )
}
