import { AxiosHttpClient } from '../../infra/http/axios-http-client/axios-http-client.ts';

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
