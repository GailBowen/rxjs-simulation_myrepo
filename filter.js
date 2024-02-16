
var stockInfo = [
    {price: 550, symbol: "WETH", volume: 900},   
    {price: 100, symbol: "AAPL", volume: 200},
    {price: 200, symbol: "GOOG", volume: 100},
    {price: 300, symbol: "MSFT", volume: 300},
    {price: 400, symbol: "AMZN", volume: 400},
];

function getStocksOver(stockInfo, min) {
    
    var results = [];

    // stockInfo.filter(function(item) {
        
    //     if (item.price > min)
    //     {
    //     results.push(item.symbol);
    //     }
    // })

    // stockInfo.filter((item) => {
        
    //     if (item.price > min)
    //     {
    //     results.push(item.symbol);
    //     }
    // })


    stockInfo.forEach(function(item){
        if (item.price > min)
        {
          results.push(item.symbol);
        }
        
    })
    
    return results;
}

var expensiveStocks = getStocksOver(stockInfo, 200);

console.log(JSON.stringify(expensiveStocks));