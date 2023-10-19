import {HttpClient, HttpStatusCode} from '../../protocols/http/http-client';
import {
    CompareStocksParams,
    GetStockByNameParams,
    GetStockGainsParams,
    GetStockHistoryParams,
    Stocks
} from "../../../domain/usecases/stocks/stocks.ts";
import {GetStockByNameResponse} from "../../../domain/models";
import {ForbiddenError, InvalidCredentialsError, UnexpectedError} from "../../../domain/errors";
import {GetStockHistoryResponse} from "../../../domain/models/get-stock-history-response.ts";
import {GetStockGainsResponse} from "../../../domain/models/get-stock-gains-response.ts";
import {pricesFake, pricesFake15Days, pricesFakeWeek} from "../../../presentation/modules/dashboard/fakedata/prices.ts";
import {CompareStockResponse} from "../../../domain/models/compare-stock-response.ts";

export class RemoteStocks implements Stocks {
    /**
     * Constructs a RemoteValidate
     *
     * @param url The url that will be called in request
     * @param httpClient The Client which will be used to call the api
     * */
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<any>,
    ) {
    }

    async getStockByName(params: GetStockByNameParams): Promise<GetStockByNameResponse> {
        const httpResponse = await this.httpClient.request({
            url: this.url  + params.stock_name + '/quote',
            method: 'get',
        });

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body;
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError();
            case HttpStatusCode.forbidden:
                throw new ForbiddenError();
            default:
                throw new UnexpectedError(httpResponse.body?.message);
        }

    }

    async getStockHistory(params: GetStockHistoryParams): Promise<GetStockHistoryResponse> {
        // const httpResponse = await this.httpClient.request({
        //     url: this.url + params.stock_name + '/history?from=' + params.from + '&to=' + params.to,
        //     method: 'get',
        // });
        //
        // switch (httpResponse.statusCode) {
        //     case HttpStatusCode.ok:
        //         return httpResponse.body;
        //     case HttpStatusCode.unauthorized:
        //         throw new InvalidCredentialsError();
        //     case HttpStatusCode.forbidden:
        //         throw new ForbiddenError();
        //     default:
        //         throw new UnexpectedError(httpResponse.body?.message);
        // }

        console.log(params.to)
        if (params.to === '2023-10-12') {
            return {
                "name": "VAL",
                "prices": pricesFakeWeek
            }
        } else if (params.to === '2023-09-19') {
            return {
                "name": "VAL",
                "prices": pricesFake15Days
            }
        } else {
            return {
                "name": "VAL",
                "prices": pricesFake
            }
        }


    }

    async getStockGains(params: GetStockGainsParams): Promise<GetStockGainsResponse> {
        // const httpResponse = await this.httpClient.request({
        //     url: this.url + params.stock_name + '/gains?purchasedAt=' + params.purchasedAt + '&purchasedAmount=' + params.purchasedAmount,
        //     method: 'get',
        // });
        //
        // switch (httpResponse.statusCode) {
        //     case HttpStatusCode.ok:
        //         return httpResponse.body;
        //     case HttpStatusCode.unauthorized:
        //         throw new InvalidCredentialsError();
        //     case HttpStatusCode.forbidden:
        //         throw new ForbiddenError();
        //     default:
        //         throw new UnexpectedError(httpResponse.body?.message);
        // }

        return {
            "name": "VAL",
            "lastPrice": 62.83,
            "priceAtDate": 62.92,
            "purchasedAmount": 10.5,
            "purchasedAt": "2022-11-01",
            "capitalGains": -0.9449999999999363
        }
    }

    async compareStocks(params: CompareStocksParams): Promise<CompareStockResponse> {
        // const makeParamsUrl = () => {
        //     const url = '';
        //     params.stocksToCompare.map((item, index) => {
        //         if (index === 0) {
        //             url.concat('stocksToCompare[]=' + item)
        //             return
        //         }
        //         url.concat('&stocksToCompare[]=' + item)
        //     })
        //     return url
        // }
        //
        // const httpResponse = await this.httpClient.request({
        //     url: this.url + params.stock_name + '/compare?' + makeParamsUrl(),
        //     method: 'get',
        // });
        //
        // switch (httpResponse.statusCode) {
        //     case HttpStatusCode.ok:
        //         return httpResponse.body;
        //     case HttpStatusCode.unauthorized:
        //         throw new InvalidCredentialsError();
        //     case HttpStatusCode.forbidden:
        //         throw new ForbiddenError();
        //     default:
        //         throw new UnexpectedError(httpResponse.body?.message);
        // }

        return {
            "lastPrices": [
                {
                    "name": "VAL",
                    "lastPrice": 62.83,
                    "pricedAt": "2022-11-03"
                },
                {
                    "name": "VALE",
                    "lastPrice": 13.11,
                    "pricedAt": "2022-11-03"
                },
                {
                    "name": "V",
                    "lastPrice": 194.75,
                    "pricedAt": "2022-11-03"
                }
            ]
        }
    }
}
