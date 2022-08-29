// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized) in string form.
// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

// Things to consider: how to move through a string? How to capitalize letters? how to create/add to a new string?

// ===================================
// with Array?
// ===================================
function acronym(str) {
    // your code here
    temp = []
    var splitStr = str.split(" ")
    // console.log(splitStr.length)
    for (let i = 0; i < splitStr.length; i++) {
        temp.push((splitStr[i][0].toUpperCase()))

    }str = temp.join('')
    return str
    }

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ===================================
// with new String only?
// ===================================
function acronym(str) {
    // your code here
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ==================================================================================================================
// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.
// Example: "creature" ---> "erutaerc"
// ** Don't use the built-in reverse() method!

// ===================================
// with Array
// ===================================
function reverseString(str) {
    // your code here
    var arr = str.split("");
    console.log(arr);

    for (var i = 0 ; i< arr.length/2 ; i++) {
        var temp = arr[i];
        arr [i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}

console.log(reverseString("creature")); // "erutaerc"


// ===================================
// with new String only
// ===================================
function reverseString(str) {
    // your code here
    var temp = []
    for (let i = str.length-1; i>= 0; i--) {
        temp.push(str[i])
    }
    return temp.join("")
}
}

console.log(reverseString("creature")); // "erutaerc"


function reverseString(str) {
    var newStr = "";
    for (var i =str.length - 1 ; i > -1 ; i--) {
        newStr += str [i];
    }
    return newStr;
}

console.log(reverseString("creature")); // "erutaerc"