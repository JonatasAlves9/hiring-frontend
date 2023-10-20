export interface GetStockGainsResponse {
  name: string;
  lastPrice: number;
  priceAtDate: number;
  purchasedAmount: number;
  purchasedAt: string;
  capitalGains: number;
}
