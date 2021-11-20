const twoSum = (nums, target) =>{
    let storage = {};
    for (let [index, target] of nums.entries()){
        if (storage[num] !== undefined) return [storage[num], index];
        storage[target - num] = index;
    }
}