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



// exchanges.forEach(function (exchange) {
//     //console.log(JSON.stringify(exchange));

//     exchange.forEach(function(innerExchange){
//         console.log(JSON.stringify(innerExchange));
//     })

// });

Array.prototype.concatAll = function() {
    var results = [];
    
    this.forEach(function(subArray) {
      subArray.forEach(function(item) {
        results.push(item);    
      });
    });  
  
    return results;
  };
  

//var infos = exchanges.concatAll();

exchanges.concatAll().forEach(stock=> {
    console.log('', JSON.stringify(stock), '\n');
})

//console.log(JSON.stringify(infos));



