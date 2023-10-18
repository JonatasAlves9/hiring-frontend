import axios, {type AxiosResponse} from 'axios';
import {
    HttpClient,
    HttpRequest,
    HttpResponse,
} from '../../../data/protocols/http/http-client';

axios.defaults.baseURL = 'https://radeestagio.com.br/api';

axios.defaults.withCredentials = true;

export class AxiosHttpClient implements HttpClient {
    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: {
                    ...data.headers,
                },
            });
        } catch (error: any) {
            axiosResponse = error.response;
        }

        return {
            statusCode: axiosResponse?.status,
            body: axiosResponse?.data || axiosResponse,
        };
    }
}
