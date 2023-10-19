import {GetStockByNameResponse} from "../../models/";
import {GetStockHistoryResponse} from "../../models/get-stock-history-response.ts";
import {GetStockGainsResponse} from "../../models/get-stock-gains-response.ts";

export type GetStockByNameParams = {
    stock_name: string;
};

export type GetStockHistoryParams = {
    stock_name: string;
    from: string;
    to: string;
};

export type GetStockGainsParams = {
    stock_name: string;
    purchasedAt: string;
    purchasedAmount: string;
};

export interface Stocks {
    getStockByName: (
        params: GetStockByNameParams,
    ) => Promise<GetStockByNameResponse>;
    getStockHistory: (params: GetStockHistoryParams) => Promise<GetStockHistoryResponse>
    getStockGains: (params: GetStockGainsParams) => Promise<GetStockGainsResponse>
}
