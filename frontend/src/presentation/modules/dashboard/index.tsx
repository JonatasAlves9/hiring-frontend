import { ContentFlex, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";

export const Dashboard = () => {
    return (
        <Wrapper>
            <IconBack/>
            <ContentFlex>
                <CardDetailStock></CardDetailStock>
                <CardSimulateStock></CardSimulateStock>
            </ContentFlex>
        </Wrapper>
    )
}
