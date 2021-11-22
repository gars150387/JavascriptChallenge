/**
 * @param {number[]} arr
 * @return {number[]}
 */

// result is wrong answer because when it is test with an array = [400]
//shoulb be return -1 


 var replaceElements = function(arr) {
    arr[0] = Math.max(...arr)
    // console.log(arr[0])
    arr[arr.length] = -1
    // console.log(arr.length)
    
   for ( let i = arr.length - 1; i > 0; i--){
       // console.log(arr[i])
       if (arr[i] > arr[i-1]){
           arr[i-1] = arr[i]
           // console.log(arr[i-1])
       }
       else if (arr[0] === arr[1]){
           arr.slice(1)
       }
   }
   return arr

}