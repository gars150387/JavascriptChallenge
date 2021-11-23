/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    arr[0] = Math.max(...arr);
    console.log(arr)
    
   for ( let i = arr.length; i > 0; i--){
       // if(arr[i.length] == undefined){
       //     arr.push(-1)
       // }
    
       if (arr[i] > arr[i-1]){
           arr[i-1] = arr[i]
           console.log(arr)
           
       }
       else if (arr[0] === arr[1]){
           arr.shift()
           arr.push(-1)
           console.log(arr)
       }
       else if( arr.length < 2){
           return arr = [-1]
       }
       
   }
   return arr;
};
