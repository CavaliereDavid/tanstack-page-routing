export type RevenueData = {
    [key: string]: RevenueYearOverview
}

export type RevenueYearOverview = {
    total: string
    symbol: string
    percentage: string
}