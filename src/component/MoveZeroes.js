/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++){
        console.log(nums[i])
        
     if (nums[i] === 0){
            nums.shift(nums[i])
            nums.push(nums[i])
            console.log(nums)
        }
    }
    return nums
    console.log(nums)
};