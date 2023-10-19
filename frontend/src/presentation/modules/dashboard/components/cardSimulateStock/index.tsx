import {
    Content, ContentResult,
    Description, DescriptionResult,
    Header,
    HeaderResult,
    Label,
    Title,
    TitleResult,
    Value,
    ViewPrices, ViewQuantityStocks, ViewValue,
    Wrapper
} from "./styles.ts";
import {InputCurrency} from "../../../../components/inputCurrency";
import {InputDate} from "../../../../components/inputDate";
import {Button} from "../../../../components/button";
import {GetStockGainsResponse} from "../../../../../domain/models/get-stock-gains-response.ts";

interface IProps {
    getGainsOfStock: (purchasedAt: string, purchasedAmount: string) => void;
    gainsOfStock: GetStockGainsResponse
}

export const CardSimulateStock = ({getGainsOfStock, gainsOfStock}: IProps) => {

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

                <ContentResult>
                    <HeaderResult>
                        <TitleResult>AVA</TitleResult>
                        <DescriptionResult>11/09/2023</DescriptionResult>
                    </HeaderResult>

                    <ViewPrices>
                        <ViewValue>
                            <Label>Último preço</Label>
                            <Value>R$ 67,43</Value>
                        </ViewValue>
                        <ViewValue>
                            <Label>Preço na data</Label>
                            <Value>R$ 68,43</Value>
                        </ViewValue>
                    </ViewPrices>
                    <ViewQuantityStocks>
                        <ViewValue>
                            <Label>Quantidade de ações</Label>
                            <Value>10 unidades</Value>
                        </ViewValue>
                    </ViewQuantityStocks>
                    <ViewValue>
                        <Label>Total ganho</Label>
                        <Value>R$ 0,93</Value>
                    </ViewValue>
                </ContentResult>

            </Content>


        </Wrapper>
    )
}
