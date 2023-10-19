import {makeApiStocks} from "../../../http/api-url-factory.ts";
import {makeAxiosHttpClient} from "../../../http/axios-http-client-factory.ts";
import {RemoteStocks} from "../../../../data/usecases/stocks/remote-stocks.ts";
import {Stocks} from "../../../../domain/usecases/stocks/stocks.ts";


export const makeStock = (): Stocks => {
    return new RemoteStocks(makeApiStocks(), makeAxiosHttpClient());
};
