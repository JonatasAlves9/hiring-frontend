import {GetStockByNameResponse} from "../../models/";
import {GetStockHistoryResponse} from "../../models/get-stock-history-response.ts";
import {GetStockGainsResponse} from "../../models/get-stock-gains-response.ts";
import {CompareStockResponse} from "../../models/compare-stock-response.ts";

export type GetStockByNameParams = {
    stock_name: string;
};

export type GetStockHistoryParams = {
    stock_name: string;
    from: Date;
    to: Date;
};

export type GetStockGainsParams = {
    stock_name: string;
    purchasedAt: Date;
    purchasedAmount: string;
};

export type CompareStocksParams = {
    stock_name: string;
    stocksToCompare: string[];
};

export interface Stocks {
    getStockByName: (
        params: GetStockByNameParams,
    ) => Promise<GetStockByNameResponse>;
    getStockHistory: (params: GetStockHistoryParams) => Promise<GetStockHistoryResponse>
    getStockGains: (params: GetStockGainsParams) => Promise<GetStockGainsResponse>
    compareStocks: (params: CompareStocksParams) => Promise<CompareStockResponse>;
}
