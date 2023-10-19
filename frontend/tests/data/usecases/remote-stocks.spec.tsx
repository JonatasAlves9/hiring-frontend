import {RemoteStocks} from "../../../src/data/usecases/stocks/remote-stocks";
import {HttpClientSpy} from "../mocks/mock-http";
import {
    GetStockByNameParams,
    GetStockGainsParams,
    GetStockHistoryParams,
    Stocks
} from "../../../src/domain/usecases/stocks/stocks";

type SutTypes = {
    sut: RemoteStocks
    httpClientSpy: HttpClientSpy<Stocks>
};

const makeSut = (url: string = 'any_url'): SutTypes => {
    const httpClientSpy = new HttpClientSpy<Stocks>()
    const sut = new RemoteStocks(url, httpClientSpy)
    return {
        sut,
        httpClientSpy
    }
};
describe('RemoteStocks', () => {
    test('Should call getStockByName with corrects params', async () => {
        const url = '/stock/any_name/quote'
        const {sut, httpClientSpy} = makeSut('/')
        const getStockByNameParams: GetStockByNameParams = {
            stock_name: 'any_name'
        }

        await sut.getStockByName(getStockByNameParams)

        expect(httpClientSpy.url).toBe(url)
        expect(httpClientSpy.method).toBe('get')
    });

    test('Should call getStockHistory with correct URL and params', async () => {
        const {sut, httpClientSpy} = makeSut('/');

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
        const {sut, httpClientSpy} = makeSut('/');

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
});
