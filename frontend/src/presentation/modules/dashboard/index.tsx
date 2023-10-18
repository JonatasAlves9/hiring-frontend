import {ContentFlex, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {useCallback, useEffect, useState} from "react";
import {Stocks} from "../../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../../domain/models";

interface IProps {
    stock: Stocks
}

export const Dashboard = ({stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();

    const getDetailAboutStock = useCallback((stock_name: string) => {
        stock.getStockByName({
            stock_name
        }).then((res) => {
            setStockDetail(res)
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
                            <CardDetailStock stockDetail={{
                                name: 'VAL',
                                lastPrice: 70,
                                pricedAt: '2022-11-03'
                            }}/>
                            <CardSimulateStock></CardSimulateStock>
                        </ContentFlex>
                    </>
                ) : null
            }

        </Wrapper>
    )
}
