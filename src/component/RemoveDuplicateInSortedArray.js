/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++){
        // console.log(nums)
        let duplicated = [nums[i] === nums[i+1]]
        if ( nums[i] === nums[i+1]){
            nums.splice(i,)
            // console.log(nums)
        }
    }
    return nums
    console.log(nums)