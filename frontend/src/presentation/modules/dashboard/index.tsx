import {ContentFlex, LogoSearch, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {useCallback, useState} from "react";
import {Stocks} from "../../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../../domain/models";
import {GetStockHistoryResponse} from "../../../domain/models/get-stock-history-response.ts";
import {pricesFake} from "./fakedata/prices.ts";
import {SearchInput} from "./components/searchInput";

interface IProps {
    stock: Stocks
}

export const Dashboard = ({stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();
    const [stockHistory, setStockHistory] = useState<GetStockHistoryResponse | undefined>({
        "name": "VAL",
        "prices": pricesFake
    });
    const [stocksToCompare, setStockToCompare] = useState<string[]>([])

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

    const compareStock = useCallback((new_stock_to_compare: string) => {
        setStockToCompare(oldValue => [...oldValue, new_stock_to_compare])

        if (stockDetail === undefined) {
            return
        }

        stock.compareStocks({
            stock_name: stockDetail.name,
            stocksToCompare: [...stocksToCompare, new_stock_to_compare]
        }).then((res) => {
            console.log(res)
            setStockToCompare(oldValue => [...oldValue, new_stock_to_compare])
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
                stockDetail ? (
                    <>
                        <IconBack/>
                        <ContentFlex>
                            <CardDetailStock
                                getHistoryOfStock={getHistoryOfStock}
                                stockDetail={stockDetail}
                                stockHistory={stockHistory}
                                stocksToCompare={stocksToCompare}
                                compareStock={compareStock}
                            />
                            <CardSimulateStock getGainsOfStock={getGainsOfStock} gainsOfStock={{
                                "name": "VAL",
                                "lastPrice": 62.83,
                                "priceAtDate": 62.92,
                                "purchasedAmount": 10.5,
                                "purchasedAt": "2022-11-01",
                                "capitalGains": -0.9449999999999363
                            }}/>
                        </ContentFlex>
                    </>
                ) : (
                    <div>
                        <div style={{
                            marginTop: 200,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <LogoSearch
                                src={'https://quickin-media-production.s3.sa-east-1.amazonaws.com/KjWrSm01yF3aXlitW59fK9rusARuomEudxA2Ph35mdJKTq1kM7pK4fnLpfqffK3N/ADGROWTH-HOR-ROXO-PRETO_1.png'}/>
                        </div>
                        <div style={{
                            marginTop: 80,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <SearchInput onChange={getDetailAboutStock}/>
                        </div>
                    </div>
                )
            }
        </Wrapper>
    )
}
