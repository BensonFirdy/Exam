/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.

 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
  var dupes='';
  for(var i=0; i<str.length; i++){
      if(dupes.indexOf(str[i])==-1){
          dupes += str[i];
      }
  }
  return dupes;
}

console.log(stringDedupe(str1));



/****************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.

 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
  var newString = "";
  for (var i = str.length - 1; i>=0; i--){
    newString += str[i];
  }return newString;
}
console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))
function reverseWords(str) {
  let splitStr = [];
  let splitStrRev = [];
  let tempStr = '';

  //Split the string into an array:
  for (let i = 0; i < str.length; i++){
      if (i+1 == str.length){ 
          tempStr += str[i];
          splitStr.push(tempStr);
      } else if (str[i+1] != ' '){
          tempStr += str[i];
      } else {
          tempStr += str[i];
          splitStr.push(tempStr);
          while (str[i+1] == ' '){
              i++;
          }
          tempStr = '';
      }
  }

  //reverse all the words in the splitStr array and add to splitStrRev array
  for (let word of splitStr){
      tempStr = '';
      for (let i = word.length-1; i >= 0; i--){
          tempStr += word[i];
      }
      splitStrRev.push(tempStr);
  }
  
  //join the splitStrRev array to make one string
  return splitStrRev.join(" ");
}
/********************************/
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.

 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {}
function reverseWordOrder(str) {
  let splitStr = str.trim().split(/\s+/).reverse().join(" ");
  return splitStr;
}