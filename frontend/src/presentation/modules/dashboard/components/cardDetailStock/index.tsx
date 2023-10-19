import {
    Button, ButtonCompareAction, ButtonLabel, ChartContainer, Container, Content, ContentChart,
    DescriptionValueStock, Header, Icon, InputCompare, TableContainer, Title, ValueStock,
    ViewAnimationPresence, ViewCompareStocks, ViewInformationAndDate, Wrapper
} from "./styles.ts";
import ChartLineHistory from "../chartLineHistory";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {ButtonsDate} from "../buttonsDate";
import {faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from "react";
import {useStock} from "../../../../hooks/useStocks.tsx";
import {TableStockCompare} from "../tableStocksCompare";
import {Spinner} from "react-activity";
import {themeDark} from "../../../../style/themes.ts";
import {STATUS_REQUEST} from "../../../../../domain/models/status-request.ts";

const StockItem: React.FC<{ item: string }> = ({item}) => (
    <div key={Math.random()} style={{
        display: "flex",
        alignItems: 'center',
        gap: 10
    }}>
        <Title>{item}</Title>
        <Icon icon={faCodeCompare}/>
    </div>
);

export const CardDetailStock: React.FC = () => {
    const [isCompare, setIsCompare] = useState(false);
    const [inputCompare, setInputCompare] = useState<string>('');

    const {
        stockDetail, stocksToCompare = [], stockHistory, compareStock,
        stocksCompared, resetCompare, loadingStockHistory, loadingCompareStock
    } = useStock();

    return (
        <Wrapper>
            <Header>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    compareStock(inputCompare);
                    setInputCompare('');
                }}>
                    <ViewCompareStocks>
                        <Title>{stockDetail?.name}</Title>
                        {
                            isCompare && <ViewAnimationPresence show={isCompare}>
                                <Icon icon={faCodeCompare}/>
                                {stocksToCompare.map(item => <StockItem item={item}/>)}

                                <InputCompare onChange={e => setInputCompare(e.target.value)} value={inputCompare}
                                              autoFocus/>
                                <ButtonCompareAction onClick={() => {
                                    compareStock(inputCompare);
                                    setInputCompare('');
                                }}>
                                    {loadingCompareStock === STATUS_REQUEST.LOADING ?
                                        <Spinner color={themeDark.colors.white} size={13}/> :
                                        <>
                                            <Icon icon={faCodeCompare}/>
                                            <ButtonLabel>Comparar</ButtonLabel>
                                        </>
                                    }
                                </ButtonCompareAction>
                            </ViewAnimationPresence>
                        }
                    </ViewCompareStocks>
                </form>

                <Button onClick={() => {
                    resetCompare();
                    setIsCompare(prev => !prev);
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
                    {stocksToCompare.length > 0 ?
                        <ViewAnimationPresence show={stocksToCompare.length > 0}>
                            <Container style={{display: 'flex', flex: 1, gap: 10}}>
                                <TableContainer style={{flex: .3}}>
                                    <TableStockCompare data={stocksCompared}/>
                                </TableContainer>
                                <ChartContainer style={{flex: 1}}>
                                    <ChartLineHistory stockHistory={stockHistory} loading={loadingStockHistory}/>
                                </ChartContainer>
                            </Container>
                        </ViewAnimationPresence> :
                        <ChartLineHistory stockHistory={stockHistory} loading={loadingStockHistory}/>
                    }
                </ContentChart>
            </Content>
        </Wrapper>
    );
};
