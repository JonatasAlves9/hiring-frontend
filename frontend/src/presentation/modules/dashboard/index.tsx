import {ContentFlex, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {useCallback, useState} from "react";
import {Stocks} from "../../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../../domain/models";
import {GetStockHistoryResponse} from "../../../domain/models/get-stock-history-response.ts";

interface IProps {
    stock: Stocks
}

export const Dashboard = ({stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();
    const [stockHistory, setStockHistory] = useState<GetStockHistoryResponse | undefined>();

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
                            <CardDetailStock getHistoryOfStock={getHistoryOfStock} stockDetail={{
                                name: 'VAL',
                                lastPrice: 70,
                                pricedAt: '2022-11-03'
                            }} stockHistory={{
                                "name": "VAL",
                                "prices": [{
                                    "opening": 67.89,
                                    "low": 62.631,
                                    "high": 68.87,
                                    "closing": 62.92,
                                    "pricedAt": "2022-11-01",
                                    "volume": 1375669
                                },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },
                                    {
                                        "opening": 67.89,
                                        "low": 62.631,
                                        "high": 68.87,
                                        "closing": 62.92,
                                        "pricedAt": "2022-11-01",
                                        "volume": 1375669
                                    },
                                    {
                                        "opening": 63.19,
                                        "low": 61,
                                        "high": 64.35,
                                        "closing": 61.63,
                                        "pricedAt": "2022-11-02",
                                        "volume": 1011467
                                    },
                                    {
                                        "opening": 62.45,
                                        "low": 60.5,
                                        "high": 63.25,
                                        "closing": 61.28,
                                        "pricedAt": "2022-11-03",
                                        "volume": 980000
                                    },
                                    {
                                        "opening": 61.5,
                                        "low": 59.2,
                                        "high": 62.1,
                                        "closing": 60.5,
                                        "pricedAt": "2022-11-04",
                                        "volume": 950000
                                    },
                                    {
                                        "opening": 60.7,
                                        "low": 59,
                                        "high": 61.8,
                                        "closing": 60.2,
                                        "pricedAt": "2022-11-05",
                                        "volume": 920000
                                    },]
                            }}/>
                            <CardSimulateStock></CardSimulateStock>
                        </ContentFlex>
                    </>
                ) : null
            }

        </Wrapper>
    )
}
