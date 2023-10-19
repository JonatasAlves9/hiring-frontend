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
import {useState} from "react";

interface IProps {
    stockDetail: GetStockByNameResponse
    stockHistory: GetStockHistoryResponse | undefined
    getHistoryOfStock: (from: string, to: string) => void
    stocksToCompare: string[]
    compareStock: (new_stock_to_compare: string) => void
}

export const CardDetailStock = ({
                                    stockDetail,
                                    stockHistory,
                                    getHistoryOfStock,
                                    stocksToCompare,
                                    compareStock
                                }: IProps) => {

    const [isCompare, setIsCompare] = useState(false)
    const [inputCompare, setInputCompare] = useState<string>('');
    return (
        <Wrapper>
            <Header>
                <ViewCompareStocks>
                    <Title>{stockDetail.name}</Title>
                    {
                        isCompare && (
                            <>
                                <Icon icon={faCodeCompare}/>
                                {
                                    stocksToCompare.map((item) => {
                                        return (
                                            <>
                                                <Title>{item}</Title>
                                                <Icon icon={faCodeCompare}/>
                                            </>
                                        )
                                    })
                                }
                                <InputCompare onChange={(e) => setInputCompare(e.target.value)} value={inputCompare} autoFocus={true}/>
                                <ButtonCompareAction onClick={() => {
                                    compareStock(inputCompare)
                                    setInputCompare('')
                                }}>
                                    <ButtonLabel>Comparar</ButtonLabel>
                                </ButtonCompareAction>
                            </>
                        )
                    }

                </ViewCompareStocks>
                <Button onClick={() => setIsCompare(oldValue => !oldValue)}>
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
