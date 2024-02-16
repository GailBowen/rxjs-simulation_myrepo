
var stockInfo = [
                                     
    {price: 200, symbol: "GOOG", volume: 100},
    {price: 300, symbol: "MSFT", volume: 300},
    {price: 400, symbol: "AMZN", volume: 400},
];

// Array.prototype.filter = function(predicate){
//    var results = [];

//    this.forEach(function(item){
//         if (predicate(item))
//         {
//             results.push(item);
//         }
//     });

//     return results;
// }

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


    // stockInfo.forEach(function(item){
    //     if (item.price > min)
    //     {
    //       results.push(item.symbol);
    //     }
        
    // })
    
    

    return stockInfo
        .filter(stock => {
            return stock.price > min;
        }).map(stock => {return stock.symbol});

}

var expensiveStocks = getStocksOver(stockInfo, 200);

console.log(JSON.stringify(expensiveStocks));