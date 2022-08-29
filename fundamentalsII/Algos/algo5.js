// const keys1 = ["abc", 3, "yo"];
// const vals1 = [42, "wassup", true];
// // // const expected1 = {
//   abc: 42,
//   3: "wassup",
//   yo: true,
// };

const keys2 = [];
const vals2 = [];
const expected2 = {};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */

var keys1 = ["abc", 3, "yo"]
var vals1 = [42, "wassup", true]

// function zipArraysIntoMap(keys, values) {
    
var expected1 = keys1.map(function(e, i) {
    console.log(e)
  return [e, vals1[i]];
});


console.log(expected1)

/*************************************/

/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

// /**
//  * Inverts the given object's key value pairs so that the original values
//  * become the keys and the original keys become the values.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Object<string, any>} obj
//  * @return The given object with key value pairs inverted.
//  */
function invertObj(obj) {}