// test 1 suma 
const {sum}= require ("./app.js");

test ("adds 14 + 9 to equal 23", () =>{
    let total = sum (14,9);

    expect(total).toBe(23);
});

// test 2 fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

 // test 3 fromDollarToYen
test("One Dollar should be 156.5 yen", function() {
    const { fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5; 
     expect(yen).toBe(expected); 
})

 // test 4 fromYenToPound 
test("One Yen should be 0.87 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87; 
     expect(pounds).toBe(expected); 
});