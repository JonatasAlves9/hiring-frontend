import {createContext, JSX, useCallback, useContext, useState,} from 'react';
import {Stocks} from "../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../domain/models";
import {GetStockHistoryResponse} from "../../domain/models/get-stock-history-response.ts";
import {GetStockGainsResponse} from "../../domain/models/get-stock-gains-response.ts";
import {CompareStockResponse} from "../../domain/models/compare-stock-response.ts";
import {toastError} from "../components/toast";

interface IProps {
    children: JSX.Element;
    stock: Stocks
}

interface StockContextType {
    stockDetail: GetStockByNameResponse | undefined;
    stockHistory: GetStockHistoryResponse | undefined;
    stocksToCompare: string[] | undefined;
    getDetailAboutStock: (stock_name: string) => void;
    getHistoryOfStock: (from: string, to: string) => void;
    getGainsOfStock: (purchasedAt: string, purchasedAmount: string) => void;
    compareStock: (new_stock_to_compare: string) => void;
    gainsOfStock: GetStockGainsResponse | undefined;
    stocksCompared: CompareStockResponse | undefined;
    resetCompare: () => void,
}

export const StockContext = createContext<StockContextType>({
    stockDetail: undefined,
    stockHistory: undefined,
    stocksToCompare: [],
    getDetailAboutStock: () => null,
    getHistoryOfStock: () => null,
    getGainsOfStock: () => null,
    compareStock: () => null,
    resetCompare: () => null,
    gainsOfStock: undefined,
    stocksCompared: undefined
});

export const useStock = () => {
    return useContext(StockContext);
};

const StockProvider = ({children, stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();
    const [stockHistory, setStockHistory] = useState<GetStockHistoryResponse | undefined>();
    const [gainsOfStock, setGainsOfStock] = useState<GetStockGainsResponse | undefined>();
    const [stocksCompared, setStockedCompared] = useState<CompareStockResponse | undefined>();

    const [stocksToCompare, setStockToCompare] = useState<string[]>([])

    const getDetailAboutStock = useCallback((stock_name: string) => {
        stock.getStockByName({
            stock_name
        }).then((res) => {
            setStockDetail(res)
        }).catch((err) => {
            toastError(err.message)
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
            toastError(err.message)
        })
    }, [stockDetail])

    const getGainsOfStock = useCallback((purchasedAt: string, purchasedAmount: string) => {

        if (stockDetail === undefined) {
            return
        }

        stock.getStockGains({
            stock_name: stockDetail.name,
            purchasedAt,
            purchasedAmount
        }).then((res) => {
            setGainsOfStock(res)
        }).catch((err) => {
            toastError(err.message)
        })
    }, [stockDetail])

    const resetCompare = () => {
        setStockToCompare([])
        setStockedCompared(undefined)
    }

    const compareStock = useCallback((new_stock_to_compare: string) => {
        setStockToCompare(oldValue => [...oldValue, new_stock_to_compare])

        if (stockDetail === undefined) {
            return
        }

        stock.compareStocks({
            stock_name: stockDetail.name,
            stocksToCompare: [...stocksToCompare, new_stock_to_compare]
        }).then((res) => {
            setStockedCompared(res)
        }).catch((err) => {
            toastError(err.message)
        })
    }, [stockDetail])


    return (
        <StockContext.Provider
            value={{
                stockDetail,
                stockHistory,
                stocksToCompare,
                stocksCompared,
                gainsOfStock,
                getDetailAboutStock,
                getGainsOfStock,
                compareStock,
                getHistoryOfStock,
                resetCompare,
            }}>
            {children}
        </StockContext.Provider>
    );
};

export default StockProvider
