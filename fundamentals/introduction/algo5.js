// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//      insert value from equation into var q. Remainder divide by 10 push to new equation for var d
        // remainder divide by 5 push to new var n. Remainder divide by 1 for var p.
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function generateCoinChange(input) {
    var q;
    var d;
    var n;
    var p;
}

function amountTocoins(amount) {
    var originalNum = amount;
    var num = amount;
    var arr=[25, 10, 5, 2, 1];
    var str = '';
    var final = []

    for (var i=0; i<arr.length; i++) {
        if (num>=arr[i]) {
        num = num - arr[i];
        str = str + arr[i] + ',';
        i--;
        }
    }
    
    originalNum + '  Coins: '+str.substring(0, str.length - 1);
    // for (var i=0; i<arr.length; i++) {
    //     if (i=0; i+1 == i;);
    //     final.append(i)

    return str.split(',')

}
  console.log(amountTocoins(451))
