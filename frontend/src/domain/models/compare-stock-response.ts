export interface CompareStockResponse {
    "lastPrices": LastPrices[]
}


export interface LastPrices {
    "name": string,
    "lastPrice": number,
    "pricedAt": string
}
