/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
//  Return any array that satisfies this condition.

//  Example 1:
//  Input: nums = [3,1,2,4]
//  Output: [2,4,3,1]
//  Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

//  Example 2
//  Input: nums = [0]
//  Output: [0]

//  Constraints:
//  1 <= nums.length <= 5000
//  0 <= nums[i] <= 5000

// let nums = [3,1,2,4] first interation to test the  (code passed)
// let nums = [0,1,2] second interation to test the code (code failed)

var sortArrayByParity = function(nums) {
    
    for ( let i = 0;  i < nums.length; i++){
            let index = 0;
        let lastIndex = nums.length-1
            // let lastIndex = nums.length-1
            // console.log(lastIndex)
            
            if ( nums[index] % 2 === 1){
                nums.push(nums[index])
                nums.shift(nums[lastIndex])
                index++;
                console.log(nums)
            }else {
                index++;
                // console.log(index)
            }
    }
    return nums
    console.log(nums)
};