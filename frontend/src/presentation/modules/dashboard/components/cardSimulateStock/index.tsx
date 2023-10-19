import {Content, Description, Header, Title, Wrapper} from "./styles.ts";
import {InputCurrency} from "../../../../components/inputCurrency";
import {InputDate} from "../../../../components/inputDate";
import {Button} from "../../../../components/button";

interface IProps {
    getGainsOfStock: (purchasedAt: string, purchasedAmount: string) => void;
}

export const CardSimulateStock = ({getGainsOfStock}: IProps) => {

    const handleSubmit = () => {
        getGainsOfStock('', '')
    }

    return (
        <Wrapper>
            <Header>
                <Title>Faça uma projeção</Title>
                <Description>Selecione uma data específica e um valor, para fazermos uma projeção de
                    ganhos. </Description>
            </Header>
            <Content>
                <InputCurrency/>
                <InputDate/>
                <Button onClick={() => handleSubmit()}/>
            </Content>
        </Wrapper>
    )
}
