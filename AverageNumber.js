//calculate the average of Number

function CalculateAverage(inputArray){
    let sumofElement = 0;
    for(let i=0; i<inputArray.length; i++){
        sumofElement += inputArray[i] 
    }
    console.log(sumofElement)
    let result = parseInt(sumofElement/inputArray.length);
    return result
}
console.log("[1,2,3,6,7,4] average is",CalculateAverage([1,2,3,6,7,4,8]))