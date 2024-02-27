console.clear();

var exchanges = 
[
[
    [
        {price: 200, symbol: "GOOG", volume: 100},
        {price: 300, symbol: "MSFT", volume: 300},
        {price: 400, symbol: "AMZN", volume: 400},
    ],
    [
        {price: 200, symbol: "WETH", volume: 100},
        {price: 300, symbol: "TAIL", volume: 300},
        {price: 400, symbol: "CAT", volume: 400},
    ]
],
[
    [
        {price: 200, symbol: "ARGOS", volume: 100},
        {price: 300, symbol: "SAINS", volume: 300},
        {price: 400, symbol: "TESCO", volume: 400},
    ],
    [
        {price: 200, symbol: "GREGS", volume: 100},
        {price: 300, symbol: "HOTELCHOC", volume: 300},
        {price: 400, symbol: "BOOTS", volume: 400},
    ]
]
];

// console.log(JSON.stringify(exchanges));

var flattenedExchanges = exchanges.flat(2).filter(item => item.price > 300);
console.log(JSON.stringify(flattenedExchanges));