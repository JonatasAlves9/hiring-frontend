import {HttpClient, HttpRequest, HttpResponse, HttpStatusCode} from "../../../src/data/protocols/http/http-client";

export const mockHttpRequest = (): HttpRequest => ({
    url: 'any_url',
    method: 'get',
    body: {},
    headers: {}
})

export class HttpClientSpy<R = any> implements HttpClient<R> {
    url?: string
    method?: string
    body?: any
    headers?: any
    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok
    }

    async request(data: HttpRequest): Promise<HttpResponse<R>> {
        this.url = data.url
        this.method = data.method
        this.body = data.body
        this.headers = data.headers
        return this.response
    }
}
