export interface Commodity {
    date: string;
    value: string;
}
  

export interface Commodities {
    [commodityName: string]: Commodity;
}