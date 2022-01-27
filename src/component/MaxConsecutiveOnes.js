/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,1,0,1,1,1] max consecutive of 1s is 3
 var findMaxConsecutiveOnes = function(nums) {
     let cm = 0;
     let fm = 0;
     
     for (let i = 0; i < nums.length; i++){
         if (nums[i] ===1){
             cm++;
             fm = Math.max(cm, fm)
         }
         else{
             cm = 0;
         }
     }
     return fm;
 };

 export default findMaxConsecutiveOnes;