import {
    Button,
    ButtonCompareAction,
    ButtonLabel,
    Content,
    ContentChart,
    DescriptionValueStock,
    Header,
    Icon,
    InputCompare,
    Title,
    ValueStock,
    ViewCompareStocks,
    ViewInformationAndDate,
    Wrapper
} from "./styles.ts";
import ChartLineHistory from "../chartLineHistory";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {ButtonsDate} from "../buttonsDate";
import {faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {useStock} from "../../../../hooks/useStocks.tsx";
import {TableStockCompare} from "../tableStocksCompare";

export const CardDetailStock = () => {

    const [isCompare, setIsCompare] = useState(false)
    const [inputCompare, setInputCompare] = useState<string>('');

    const {
        stockDetail,
        stocksToCompare,
        stockHistory,
        compareStock,
        stocksCompared,
        resetCompare,
        loadingStockHistory,
    } = useStock();

    return (
        <Wrapper>
            <Header>
                <ViewCompareStocks>
                    <Title>{stockDetail?.name}</Title>
                    {
                        isCompare && (
                            <>
                                <Icon icon={faCodeCompare}/>
                                {
                                    (stocksToCompare || []).map((item) => {
                                        return (
                                            <div key={Math.random()} style={{
                                                display: "flex",
                                                alignItems: 'center',
                                                gap: 10
                                            }}>
                                                <Title>{item}</Title>
                                                <Icon icon={faCodeCompare}/>
                                            </div>
                                        )
                                    })
                                }
                                <InputCompare
                                    onChange={(e) => setInputCompare(e.target.value)} value={inputCompare}
                                    autoFocus={true}/>
                                <ButtonCompareAction
                                    onClick={() => {
                                        compareStock(inputCompare)
                                        setInputCompare('')
                                    }}>
                                    <ButtonLabel>Comparar</ButtonLabel>
                                </ButtonCompareAction>
                            </>
                        )
                    }

                </ViewCompareStocks>
                <Button onClick={() => {
                    resetCompare()
                    setIsCompare(oldValue => !oldValue)
                }}>
                    <Icon icon={faCodeCompare}/>
                    <ButtonLabel>Comparar</ButtonLabel>
                </Button>
            </Header>
            <Content>
                <ViewInformationAndDate>
                    <div>
                        <ValueStock>{formatCurrency(stockDetail?.lastPrice || 0)}</ValueStock>
                        <DescriptionValueStock>Valor Atual</DescriptionValueStock>
                    </div>
                    <ButtonsDate/>
                </ViewInformationAndDate>
                <ContentChart>
                    {
                        (stocksToCompare || []).length > 0 ? (
                            <div style={{
                                display: 'flex',
                                flex: 1,
                                gap: 10
                            }}>
                                <div style={{
                                    flex: .3
                                }}>
                                    <TableStockCompare data={stocksCompared}/>
                                </div>
                                <div style={{
                                    flex: 1
                                }}>
                                    <ChartLineHistory stockHistory={stockHistory} loading={loadingStockHistory}/>
                                </div>

                            </div>
                        ) : (
                            <ChartLineHistory stockHistory={stockHistory} loading={loadingStockHistory}/>)
                    }

                </ContentChart>
            </Content>
        </Wrapper>
    )
}
