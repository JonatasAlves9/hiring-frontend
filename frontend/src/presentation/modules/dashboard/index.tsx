import {CardDetailStock, CardSimulateStock, ContentFlex, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";

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
