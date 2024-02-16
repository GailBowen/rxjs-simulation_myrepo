//Create an array of stock info containing price, symbol, and volume
var stockInfo = [   
    {price: 100, symbol: "AAPL", volume: 200},
    {price: 200, symbol: "GOOG", volume: 100},
    {price: 300, symbol: "MSFT", volume: 300},
    {price: 400, symbol: "AMZN", volume: 400},
];


//Create a function that takes in the stock info and returns an array of symbols:
function getSymbols(stockInfo) {
    
    var smybols = [];

    // stockInfo.forEach(function(stock) {
    //     smybols.push(stock.symbol);
    // });

    stockInfo.map(
        function(stock) {
            smybols.push(stock.symbol);
        }   
    )

    return smybols;

}

// Array.prototype.map = function(projection) {
//     var results = [];

//     this.forEach(function(item)
//     {
//         results.push(projection(item));
//     }
//     )
// }

var mySymbols = getSymbols(stockInfo);

console.log('my symbols:', JSON.stringify(mySymbols));