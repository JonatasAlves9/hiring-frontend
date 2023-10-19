import {
    Button, ButtonCompareAction, ButtonLabel,
    Content,
    ContentChart,
    DescriptionValueStock,
    Header, Icon, InputCompare,
    Title,
    ValueStock, ViewCompareStocks,
    ViewInformationAndDate,
    Wrapper
} from "./styles.ts";
import ChartLineHistory from "../chartLineHistory";
import {GetStockByNameResponse} from "../../../../../domain/models";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {ButtonsDate} from "../buttonsDate";
import {GetStockHistoryResponse} from "../../../../../domain/models/get-stock-history-response.ts";
import {faCodeCompare} from '@fortawesome/free-solid-svg-icons';

interface IProps {
    stockDetail: GetStockByNameResponse
    stockHistory: GetStockHistoryResponse | undefined
    getHistoryOfStock: (from: string, to: string) => void
}

export const CardDetailStock = ({stockDetail, stockHistory, getHistoryOfStock}: IProps) => {
    return (
        <Wrapper>
            <Header>
                <ViewCompareStocks>
                    <Title>{stockDetail.name}</Title>
                    <Icon icon={faCodeCompare}/>
                    <Title>PETR</Title>
                    <Icon icon={faCodeCompare}/>
                    <InputCompare />
                    <ButtonCompareAction>
                        <ButtonLabel>Comparar</ButtonLabel>
                    </ButtonCompareAction>
                </ViewCompareStocks>
                <Button>
                    <Icon icon={faCodeCompare}/>
                    <ButtonLabel>Comparar</ButtonLabel>
                </Button>
            </Header>
            <Content>
                <ViewInformationAndDate>
                    <div>
                        <ValueStock>{formatCurrency(stockDetail.lastPrice)}</ValueStock>
                        <DescriptionValueStock>Valor Atual</DescriptionValueStock>
                    </div>
                    <ButtonsDate getHistoryOfStock={getHistoryOfStock}/>
                </ViewInformationAndDate>
                <ContentChart>
                    <ChartLineHistory stockHistory={stockHistory}/>
                </ContentChart>
            </Content>
        </Wrapper>
    )
}
