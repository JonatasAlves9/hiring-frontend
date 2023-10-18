import {ErrorResponse, GetStockByNameResponse} from "../../models/";

export type GetStockByNameParams = {
    stock_name: string;
};

export interface Stocks {
    getPerGroup: (
        params: GetStockByNameParams,
    ) => Promise<GetStockByNameResponse | ErrorResponse
    >;
}
