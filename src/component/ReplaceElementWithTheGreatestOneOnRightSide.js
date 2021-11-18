/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let aux = []
    for (let outter = 0; outter < arr.length; outter++){
        // aux.push(arr[outter])
        // aux.reverse()
        console.log(arr)
        if(arr[outter+1] > arr[outter] ){
            arr[outter] = arr[outter+1]
            console.log(arr)
        }
        
    }
    const highestvalue = (arr)=>{
        
    }
}