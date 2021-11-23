/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    
    for (let i = 0; i < nums.length; i++){
        console.log(nums[i])
        
        if (nums[i] < 1){
            nums.shift(nums[i])
            console.log(nums[i])
            
            nums.push(0)
        }
        else if(nums[0] === 0){
            return nums[0] = 1;
            console.log(nums)
        }
        else if (nums.length < 2){
            return nums=[0]
            console.log(nums)
        }
                         
    
    }
    return nums
};

export default moveZeroes;