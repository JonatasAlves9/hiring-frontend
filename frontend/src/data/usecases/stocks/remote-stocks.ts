import {HttpClient, HttpStatusCode} from '../../protocols/http/http-client';
import {GetStockByNameParams, Stocks} from "../../../domain/usecases/stocks/stocks.ts";
import {ErrorResponse, GetStockByNameResponse} from "../../../domain/models";
import {ForbiddenError, InvalidCredentialsError, UnexpectedError} from "../../../domain/errors";

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

    async getPerGroup(params: GetStockByNameParams): Promise<GetStockByNameResponse | ErrorResponse> {
        const httpResponse = await this.httpClient.request({
            url: this.url + params.stock_name + '/quote',
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
