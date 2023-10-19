import {ContentFlex, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {useCallback, useState} from "react";
import {Stocks} from "../../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../../domain/models";
import {GetStockHistoryResponse} from "../../../domain/models/get-stock-history-response.ts";
import {pricesFake} from "./fakedata/prices.ts";

interface IProps {
    stock: Stocks
}

export const Dashboard = ({stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();
    const [stockHistory, setStockHistory] = useState<GetStockHistoryResponse | undefined>({
        "name": "VAL",
        "prices": pricesFake
    });

    const getDetailAboutStock = useCallback((stock_name: string) => {
        stock.getStockByName({
            stock_name
        }).then((res) => {
            setStockDetail(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const getHistoryOfStock = useCallback((from: string, to: string) => {

        if (stockDetail === undefined) {
            return
        }

        stock.getStockHistory({
            stock_name: stockDetail.name,
            from,
            to
        }).then((res) => {
            setStockHistory(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const getGainsOfStock = useCallback((purchasedAt: string, purchasedAmount: string) => {

        if (stockDetail === undefined) {
            return
        }

        stock.getStockGains({
            stock_name: stockDetail.name,
            purchasedAt,
            purchasedAmount
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    // useEffect(() => {
    //     getDetailAboutStock('VAL');
    // }, [getDetailAboutStock])

    return (
        <Wrapper>
            {
                !stockDetail ? (
                    <>
                        <IconBack/>
                        <ContentFlex>
                            <CardDetailStock
                                getHistoryOfStock={getHistoryOfStock}
                                stockDetail={{
                                    name: 'VAL',
                                    lastPrice: 70,
                                    pricedAt: '2022-11-03'
                                }}
                                stockHistory={stockHistory}
                            />
                            <CardSimulateStock getGainsOfStock={getGainsOfStock}/>
                        </ContentFlex>
                    </>
                ) : null
            }
        </Wrapper>
    )
}
