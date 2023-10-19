import {RemoteStocks} from "../../../src/data/usecases/stocks/remote-stocks";
import {HttpClientSpy} from "../mocks/mock-http";
import {
    CompareStocksParams,
    GetStockByNameParams,
    GetStockGainsParams,
    GetStockHistoryParams,
    Stocks
} from "../../../src/domain/usecases/stocks/stocks";
import {HttpStatusCode} from "../../../src/data/protocols/http/http-client";
import {ForbiddenError, InvalidCredentialsError, UnexpectedError} from "../../../src/domain/errors";

type SutTypes = {
    sut: RemoteStocks
    httpClientSpy: HttpClientSpy<Stocks>
};

const makeSut = (): SutTypes => {
    const httpClientSpy = new HttpClientSpy<Stocks>()
    const sut = new RemoteStocks('/', httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
};

describe('RemoteStocks handleHttpResponse', () => {
    let sut: RemoteStocks;
    let httpClientSpy: HttpClientSpy<any>;

    beforeEach(() => {
        httpClientSpy = new HttpClientSpy();
        sut = new RemoteStocks('any_url', httpClientSpy);
    });

    test('Should return the body for 200 OK', async () => {
        httpClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: 'any_data'
        };

        const result = sut['handleHttpResponse'](httpClientSpy.response);

        expect(result).toBe('any_data');
    });

    test('Should throw InvalidCredentialsError for 401 UNAUTHORIZED', async () => {
        httpClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized,
            body: 'any_error'
        };

        expect(() => sut['handleHttpResponse'](httpClientSpy.response)).toThrow(InvalidCredentialsError);
    });

    test('Should throw ForbiddenError for 403 FORBIDDEN', async () => {
        httpClientSpy.response = {
            statusCode: HttpStatusCode.forbidden,
            body: 'any_error'
        };

        expect(() => sut['handleHttpResponse'](httpClientSpy.response)).toThrow(ForbiddenError);
    });

    test('Should throw UnexpectedError for any other status code', async () => {
        httpClientSpy.response = {
            statusCode: HttpStatusCode.badRequest,
            body: {message: 'any_error'}
        };

        expect(() => sut['handleHttpResponse'](httpClientSpy.response)).toThrow(UnexpectedError);
    });

    test('Should throw UnexpectedError use default message if no message is provided', () => {
        const error = new UnexpectedError();
        expect(error.message).toBe('Algo de errado aconteceu. Tente novamente');
    });

    test('Should throw UnexpectedError use provided message if message is provided', () => {
        const error = new UnexpectedError('custom_message');
        expect(error.message).toBe('custom_message');
    });
});

describe('RemoteStocks', () => {
    test('Should call getStockByName with corrects params', async () => {
        const url = '/stock/any_name/quote'
        const {sut, httpClientSpy} = makeSut()
        const getStockByNameParams: GetStockByNameParams = {
            stock_name: 'any_name'
        }

        await sut.getStockByName(getStockByNameParams)

        expect(httpClientSpy.url).toBe(url)
        expect(httpClientSpy.method).toBe('get')
    });

    test('Should call getStockHistory with correct URL and params', async () => {
        const {sut, httpClientSpy} = makeSut();

        const stockHistoryParams: GetStockHistoryParams = {
            stock_name: 'any_name',
            from: new Date(),
            to: new Date()
        };

        const {stock_name, from, to} = stockHistoryParams;
        const expectedUrl = `/stocks/${stock_name}/history?from=${from}&to=${to}`;

        await sut.getStockHistory(stockHistoryParams);

        expect(httpClientSpy.url).toBe(expectedUrl);
        expect(httpClientSpy.method).toBe('get');
    });

    test('Should call getStockGains with correct URL and params', async () => {
        const {sut, httpClientSpy} = makeSut();

        const stockGainsParams: GetStockGainsParams = {
            stock_name: 'any_name',
            purchasedAt: new Date(),
            purchasedAmount: "10"
        };

        const {stock_name, purchasedAt, purchasedAmount} = stockGainsParams;
        const expectedUrl = `/stocks/${stock_name}/gains?purchasedAt=${purchasedAt}&purchasedAmount=${purchasedAmount}`;

        await sut.getStockGains(stockGainsParams);

        expect(httpClientSpy.url).toBe(expectedUrl);
        expect(httpClientSpy.method).toBe('get');
    });

    test('Should call compareStocks with correct URL and params', async () => {
        const {sut, httpClientSpy} = makeSut();

        const compareStockParams: CompareStocksParams = {
            stock_name: 'any_name',
            stocksToCompare: ['any_stock1', 'any_stock2']
        };


        const {stock_name, stocksToCompare} = compareStockParams;
        const expectedUrl = `/stocks/${stock_name}/compare?stocksToCompare[]=${stocksToCompare![0]}&stocksToCompare[]=${stocksToCompare![1]}`;

        await sut.compareStocks(compareStockParams);

        expect(httpClientSpy.url).toBe(expectedUrl);
        expect(httpClientSpy.method).toBe('get');
    });

    test('Should call compareStocks with correct URL and params when stocksToCompare is null', async () => {
        const {sut, httpClientSpy} = makeSut();

        const compareStockParams: CompareStocksParams = {
            stock_name: 'any_name',
            stocksToCompare: null
        };

        const {stock_name} = compareStockParams;
        const expectedUrl = `/stocks/${stock_name}/compare?`;

        await sut.compareStocks(compareStockParams);

        expect(httpClientSpy.url).toBe(expectedUrl);
        expect(httpClientSpy.method).toBe('get');
    });
});
