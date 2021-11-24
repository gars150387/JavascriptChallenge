import React from "react";

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let index = 0;

    for ( let i = 0; i < nums.length; i++){
        const num = nums[i];

        if(num !== 0){
            nums[index] = nums[i];
            index++
        }
    }
    for ( let i = index; i < nums.length; i++){
        nums[i] = 0;
    }
};

export default moveZeroes;