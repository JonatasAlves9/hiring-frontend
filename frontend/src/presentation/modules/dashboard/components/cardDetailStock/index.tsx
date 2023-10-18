import {Content, ContentChart, DescriptionValueStock, Header, Title, ValueStock, Wrapper} from "./styles.ts";
import ChartLineHistory from "../chartLineHistory";
import {GetStockByNameResponse} from "../../../../../domain/models";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";

interface IProps {
    stockDetail: GetStockByNameResponse
}

export const CardDetailStock = ({stockDetail}: IProps) => {
    return (
        <Wrapper>
            <Header>
                <Title>{stockDetail.name}</Title>
            </Header>
            <Content>
                <ValueStock>{formatCurrency(stockDetail.lastPrice)}</ValueStock>
                <DescriptionValueStock>Valor Atual</DescriptionValueStock>
                <ContentChart>
                    <ChartLineHistory/>
                </ContentChart>
            </Content>
        </Wrapper>
    )
}
