
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen= function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 156.5;
    // return the yen value
    return valueInYen;
}


// We declare the function with the exact name "fromYenToPound"
const fromYenToPound= function(valueInYen) {
    // Convert the given valueInYen to  pound
    let valueInPound = valueInYen* 0.87;
    // return the yen value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };



let oneEurols = {
    "JPY": 156.5,
    "USD" : 1.07,
    "GBP": 0.87,

} 