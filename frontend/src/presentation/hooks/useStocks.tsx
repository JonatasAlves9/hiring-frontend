import {createContext, JSX, useCallback, useContext, useState,} from 'react';
import {Stocks} from "../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../domain/models";
import {GetStockHistoryResponse} from "../../domain/models/get-stock-history-response.ts";
import {GetStockGainsResponse} from "../../domain/models/get-stock-gains-response.ts";
import {CompareStockResponse} from "../../domain/models/compare-stock-response.ts";
import {toastError} from "../components/toast";
import {STATUS_REQUEST, StatusRequest} from "../../domain/models/status-request.ts";

interface IProps {
    children: JSX.Element;
    stock: Stocks
}

interface StockContextType {
    stockDetail: GetStockByNameResponse | undefined;
    stockHistory: GetStockHistoryResponse | undefined;
    stocksToCompare: string[] | undefined;
    getDetailAboutStock: (stock_name: string) => void;
    getHistoryOfStock: (from: Date, to: Date) => void;
    getGainsOfStock: (purchasedAt: string, purchasedAmount: string) => void;
    compareStock: (new_stock_to_compare: string) => void;
    gainsOfStock: GetStockGainsResponse | undefined;
    stocksCompared: CompareStockResponse | undefined;
    resetCompare: () => void,
    loadingStockDetail: StatusRequest
    loadingStockHistory: StatusRequest
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
    stocksCompared: undefined,
    loadingStockDetail: STATUS_REQUEST.NONE,
    loadingStockHistory: STATUS_REQUEST.NONE,
});

export const useStock = () => {
    return useContext(StockContext);
};

const StockProvider = ({children, stock}: IProps) => {
    const [stockDetail, setStockDetail] = useState<GetStockByNameResponse | undefined>();
    const [stockHistory, setStockHistory] = useState<GetStockHistoryResponse | undefined>();
    const [gainsOfStock, setGainsOfStock] = useState<GetStockGainsResponse | undefined>();
    const [stocksCompared, setStockedCompared] = useState<CompareStockResponse | undefined>();

    const [stocksToCompare, setStockToCompare] = useState<string[]>([]);

    const [loadingStockDetail, setLoadingStockDetail] = useState<StatusRequest>(STATUS_REQUEST.NONE);
    const [loadingStockHistory, setLoadingStockHistory] = useState<StatusRequest>(STATUS_REQUEST.NONE);


    const getDetailAboutStock = useCallback((stock_name: string) => {
        setLoadingStockDetail(STATUS_REQUEST.LOADING)
        stock.getStockByName({
            stock_name
        }).then((res) => {
            setStockDetail(res)
            setLoadingStockDetail(STATUS_REQUEST.DONE)
        }).catch((err) => {
            toastError(err.message)
            setLoadingStockDetail(STATUS_REQUEST.ERROR)
        })
    }, [])

    const getHistoryOfStock = useCallback((from: Date, to: Date) => {
        setLoadingStockHistory(STATUS_REQUEST.LOADING)

        if (stockDetail === undefined) {
            return
        }

        stock.getStockHistory({
            stock_name: stockDetail.name,
            from,
            to
        }).then((res) => {
            setStockHistory(res)
            setLoadingStockHistory(STATUS_REQUEST.DONE)
        }).catch((err) => {
            setLoadingStockHistory(STATUS_REQUEST.ERROR)
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
                loadingStockDetail,
                loadingStockHistory,
            }}>
            {children}
        </StockContext.Provider>
    );
};

export default StockProvider
