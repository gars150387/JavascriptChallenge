import react from "react"

function TwoSum (){

let num = [7,5,8,2]
let target = 9

const sum = (num, target) =>{
    let storage = {};
    for (let [index, target] of num.entries()){
        if (storage[num] !== undefined) return [storage[num], index];
        storage[target - num] = index;
    }
}
}

export default TwoSum;