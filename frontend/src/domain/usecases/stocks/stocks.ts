import {GetStockByNameResponse} from "../../models/";

export type GetStockByNameParams = {
    stock_name: string;
};

export interface Stocks {
    getStockByName: (
        params: GetStockByNameParams,
    ) => Promise<GetStockByNameResponse>;
}
