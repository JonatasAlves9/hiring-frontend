export interface GetStockHistoryResponse {
    "name": string,
    "prices": HistoryPrices[]
}

export interface HistoryPrices {
    "opening": number,
    "low": number,
    "high": number,
    "closing": number,
    "pricedAt": string,
    "volume": number
}
