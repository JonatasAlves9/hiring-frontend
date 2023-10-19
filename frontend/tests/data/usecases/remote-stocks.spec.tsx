import {RemoteStocks} from "../../../src/data/usecases/stocks/remote-stocks";
import {HttpClientSpy} from "../mocks/mock-http";
import {GetStockByNameParams, Stocks} from "../../../src/domain/usecases/stocks/stocks";

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
        const addAccountParams:GetStockByNameParams = {
            stock_name: 'any_name'
        }

        await sut.getStockByName(addAccountParams)

        expect(httpClientSpy.url).toBe(url)
        expect(httpClientSpy.method).toBe('get')
    });
});
