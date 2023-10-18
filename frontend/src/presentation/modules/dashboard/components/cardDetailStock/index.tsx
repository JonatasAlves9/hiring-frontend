import {
    Content,
    ContentChart,
    DescriptionValueStock,
    Header,
    Title,
    ValueStock,
    ViewInformationAndDate,
    Wrapper
} from "./styles.ts";
import ChartLineHistory from "../chartLineHistory";
import {GetStockByNameResponse} from "../../../../../domain/models";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {ButtonsDate} from "../buttonsDate";
import {GetStockHistoryResponse} from "../../../../../domain/models/get-stock-history-response.ts";

interface IProps {
    stockDetail: GetStockByNameResponse
    stockHistory: GetStockHistoryResponse
}

export const CardDetailStock = ({stockDetail, stockHistory}: IProps) => {
    return (
        <Wrapper>
            <Header>
                <Title>{stockDetail.name}</Title>
            </Header>
            <Content>
                <ViewInformationAndDate>
                    <div>
                        <ValueStock>{formatCurrency(stockDetail.lastPrice)}</ValueStock>
                        <DescriptionValueStock>Valor Atual</DescriptionValueStock>
                    </div>
                    <ButtonsDate/>
                </ViewInformationAndDate>
                <ContentChart>
                    <ChartLineHistory stockHistory={stockHistory}/>
                </ContentChart>
            </Content>
        </Wrapper>
    )
}
