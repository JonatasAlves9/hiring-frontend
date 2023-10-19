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
            url: this.url + "stock/" + params.stock_name + '/quote',
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
        const httpResponse = await this.httpClient.request({
            url: this.url + "stocks/" + params.stock_name + '/history?from=' + params.from + '&to=' + params.to,
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

    async getStockGains(params: GetStockGainsParams): Promise<GetStockGainsResponse> {
        const httpResponse = await this.httpClient.request({
            url: this.url + "stocks/" + params.stock_name + '/gains?purchasedAt=' + params.purchasedAt + '&purchasedAmount=' + params.purchasedAmount,
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

    async compareStocks(params: CompareStocksParams): Promise<CompareStockResponse> {
        const makeParamsUrl = () => {
            if (!params.stocksToCompare || !Array.isArray(params.stocksToCompare)) {
                return '';
            }

            const paramParts = params.stocksToCompare.map(item => 'stocksToCompare[]=' + encodeURIComponent(item));
            return paramParts.join('&');
        }

        const httpResponse = await this.httpClient.request({
            url: this.url + encodeURIComponent(params.stock_name) + '/compare?' + makeParamsUrl(),
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
}
