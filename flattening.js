
var exchanges = [
    { 
      name: "NYSE",
      stocks: [
        { 
          symbol: "XFX", 
          closes: [
            { date: new Date(2014,11,24), price: 240.10 },
            { date: new Date(2014,11,23), price: 232.08 },
            { date: new Date(2014,11,22), price: 241.09 }
          ]
        },
        { 
          symbol: "TNZ", 
          closes: [
            { date: new Date(2014,11,24), price: 521.24 },
            { date: new Date(2014,11,23), price: 511.00 },
            { date: new Date(2014,11,22), price: 519.29 }     
          ]
        },
      ]
    },
    { 
      name: "TSX",
      stocks: [
        { 
          symbol: "JXJ", 
          closes: [
            { date: new Date(2014,11,24), price: 423.22 },
            { date: new Date(2014,11,23), price: 424.84 },
            { date: new Date(2014,11,22), price: 419.72 }
          ]
        },
        { 
          symbol: "NYN", 
          closes: [
            { date: new Date(2014,11,24), price: 16.82 },
            { date: new Date(2014,11,23), price: 16.12 },
            { date: new Date(2014,11,22), price: 15.77 }
          ]
        },
      ]
    }
  ];


const christmasEvePrices = exchanges.flatMap(exchange =>
    exchange.stocks.map(stock => {
        const christmasEvePrice = stock.closes.find(close => close.date.getDate() === 24);
        return { symbol: stock.symbol, price: christmasEvePrice.price };
    })
);
console.log(christmasEvePrices);
  

//https://egghead.io/lessons/javascript-advanced-flattening