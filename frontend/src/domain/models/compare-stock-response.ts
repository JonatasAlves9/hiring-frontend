export interface GetStockGainsResponse {
    "lastPrices": LastPrices[]
}


export interface LastPrices {
    "name": string,
    "lastPrice": number,
    "pricedAt": string
}
