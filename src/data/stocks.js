const dummyStockData = [
    { 
        id: 1, 
        name: "Apple Inc.", 
        symbol: "AAPL", 
        price: 150.50, 
        change: -1.25, 
        changePercent: -0.82,
        marketCap: "2.5T",
        peRatio: 30.5,
        volume: 5000000,
        avgVolume: 6000000,
        dividendYield: 1.5,
        earningsDate: "2022-02-25",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 2, 
        name: "Microsoft Corporation", 
        symbol: "MSFT", 
        price: 300.20, 
        change: 2.75, 
        changePercent: 0.92,
        marketCap: "2.3T",
        peRatio: 35.2,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 1.2,
        earningsDate: "2022-02-27",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 3, 
        name: "Amazon.com Inc.", 
        symbol: "AMZN", 
        price: 3200.75, 
        change: 5.50, 
        changePercent: 0.17,
        marketCap: "1.8T",
        peRatio: 80.9,
        volume: 2000000,
        avgVolume: 2200000,
        dividendYield: 0.8,
        earningsDate: "2022-02-24",
        sector: "Consumer Cyclical",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 4, 
        name: "Alphabet Inc. (Google)", 
        symbol: "GOOGL", 
        price: 2800.10, 
        change: -3.20, 
        changePercent: -0.11,
        marketCap: "2.0T",
        peRatio: 40.6,
        volume: 3000000,
        avgVolume: 3500000,
        dividendYield: 0.9,
        earningsDate: "2022-02-26",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 5, 
        name: "Facebook, Inc.", 
        symbol: "FB", 
        price: 340.60, 
        change: 1.80, 
        changePercent: 0.53,
        marketCap: "1.0T",
        peRatio: 35.7,
        volume: 6000000,
        avgVolume: 7000000,
        dividendYield: 0.7,
        earningsDate: "2022-02-28",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 6, 
        name: "Tesla, Inc.", 
        symbol: "TSLA", 
        price: 800.00, 
        change: -0.50, 
        changePercent: -0.06,
        marketCap: "700B",
        peRatio: 150.2,
        volume: 8000000,
        avgVolume: 8500000,
        dividendYield: 0.0,
        earningsDate: "2022-03-01",
        sector: "Consumer Cyclical",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 7, 
        name: "NVIDIA Corporation", 
        symbol: "NVDA", 
        price: 750.25, 
        change: 4.25, 
        changePercent: 0.57,
        marketCap: "500B",
        peRatio: 80.5,
        volume: 4500000,
        avgVolume: 5000000,
        dividendYield: 0.5,
        earningsDate: "2022-03-02",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 8, 
        name: "Netflix, Inc.", 
        symbol: "NFLX", 
        price: 600.40, 
        change: -1.20, 
        changePercent: -0.20,
        marketCap: "300B",
        peRatio: 70.1,
        volume: 3000000,
        avgVolume: 3200000,
        dividendYield: 0.8,
        earningsDate: "2022-03-03",
        sector: "Communication Services",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 9, 
        name: "PayPal Holdings, Inc.", 
        symbol: "PYPL", 
        price: 250.80, 
        change: 3.10, 
        changePercent: 1.25,
        marketCap: "200B",
        peRatio: 50.3,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 0.9,
        earningsDate: "2022-03-04",
        sector: "Financial Services",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 10, 
        name: "Adobe Inc.", 
        symbol: "ADBE", 
        price: 550.75, 
        change: 1.50, 
        changePercent: 0.27,
        marketCap: "300B",
        peRatio: 40.9,
        volume: 2000000,
        avgVolume: 2200000,
        dividendYield: 0.8,
        earningsDate: "2022-03-05",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 11, 
        name: "Zoom Video Communications, Inc.", 
        symbol: "ZM", 
        price: 300.00, 
        change: 2.00, 
        changePercent: 0.67,
        marketCap: "200B",
        peRatio: 100.5,
        volume: 5000000,
        avgVolume: 5500000,
        dividendYield: 0.0,
        earningsDate: "2022-03-06",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 12, 
        name: "Salesforce.com, Inc.", 
        symbol: "CRM", 
        price: 250.30, 
        change: -0.80, 
        changePercent: -0.32,
        marketCap: "200B",
        peRatio: 60.8,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 0.9,
        earningsDate: "2022-03-07",
        sector: "Technology",
        country: "United States",
        exchange: "NASDAQ",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 13, 
        name: "Walmart Inc.", 
        symbol: "WMT", 
        price: 150.20, 
        change: 0.90, 
        changePercent: 0.60,
        marketCap: "300B",
        peRatio: 20.5,
        volume: 6000000,
        avgVolume: 6500000,
        dividendYield: 1.5,
        earningsDate: "2022-03-08",
        sector: "Consumer Defensive",
        country: "United States",
        exchange: "NYSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 14, 
        name: "The Home Depot, Inc.", 
        symbol: "HD", 
        price: 350.50, 
        change: -1.75, 
        changePercent: -0.50,
        marketCap: "200B",
        peRatio: 25.7,
        volume: 3000000,
        avgVolume: 3500000,
        dividendYield: 2.0,
        earningsDate: "2022-03-09",
        sector: "Consumer Cyclical",
        country: "United States",
        exchange: "NYSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 15, 
        name: "Johnson & Johnson", 
        symbol: "JNJ", 
        price: 170.80, 
        change: 0.25, 
        changePercent: 0.15,
        marketCap: "400B",
        peRatio: 15.3,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 2.5,
        earningsDate: "2022-03-10",
        sector: "Healthcare",
        country: "United States",
        exchange: "NYSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    }
    // Add more stocks with similar structure
];

export default dummyStockData;
