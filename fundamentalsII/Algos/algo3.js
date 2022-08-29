/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
   function encodeStr(str) {
    let result = ""
    for(let i = 0; i < str.length; i++){
        let currentChar = str[i];
        let nextChar = str[i+1]
        let counter = 0;
        while(currentChar == nextChar){
            counter++;
            i++;
            currentChar = str[i]
            nextChar = str[i+1]
        }
        counter++;
        result = result + currentChar + counter;
    }
    if(str.length < result.length){
        return str
    }
    else{
        return result;
    }
}

// ============================
// Decode String
// ============================

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
 function decodeStr(str) {
    let result = '';
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        //Checks if position in array is a number
        if(Number.isInteger(parseInt(arr[i],10))){
            let neighbor = arr[i+1];
            //If the neighbor is a number then, go until the neighbor isnt a number
            //Example if the number is 1, 0, 0 then it goes 1, 0, 0 -> 10 , 0 -> 100
            while((Number.isInteger(parseInt(neighbor,10)))){
                let newNum = '';
                newNum += arr[i] + neighbor;
                arr[i] = newNum;
                arr.splice(i+1, 1); //Removes Neightbor from original array
                neighbor = arr[i+1];
            }
        }
    }

    console.log(arr)
    for(let i = 0; i < arr.length; i+=2){
        let num = parseInt(arr[i+1], 10)
        while(num > 0){
            result += arr[i];
            num = num - 1;
        }
    }
    return result;
}