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

export const CardDetailStock = () => {

    const [isCompare, setIsCompare] = useState(false)
    const [inputCompare, setInputCompare] = useState<string>('');

    const {
        stockDetail,
        stocksToCompare,
        stockHistory,
        compareStock,
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
                                            <>
                                                <Title>{item}</Title>
                                                <Icon icon={faCodeCompare}/>
                                            </>
                                        )
                                    })
                                }
                                <InputCompare onChange={(e) => setInputCompare(e.target.value)} value={inputCompare}
                                              autoFocus={true}/>
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
                        <ValueStock>{formatCurrency(stockDetail?.lastPrice || 0)}</ValueStock>
                        <DescriptionValueStock>Valor Atual</DescriptionValueStock>
                    </div>
                    <ButtonsDate />
                </ViewInformationAndDate>
                <ContentChart>
                    <ChartLineHistory stockHistory={stockHistory}/>
                </ContentChart>
            </Content>
        </Wrapper>
    )
}
