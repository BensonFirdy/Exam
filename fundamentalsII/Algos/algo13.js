const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
 function dedupeSorted(nums) {
    newArr = []
    for (i = 0; i < nums.length; i++){
        newArr.push(nums[i])
        while (nums[i] == nums[i+1]){
            i++
        }
    }
    return newArr
}

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
 function firstNonRepeated(nums) {
    if (nums.length < 1){
        return null
    }
    nums = nums.sort()
    newArr = dedupeSorted(nums)
    checkArr = []
    for (i=0; i <nums.length; i++){
        if (nums[i] == nums[i+1]){
            checkArr.push(nums[i])
        }
    }
    for (j=0; j < newArr.length; j++){
        if(newArr[j] != checkArr[j]){
            return newArr[j]
        }
    }
}