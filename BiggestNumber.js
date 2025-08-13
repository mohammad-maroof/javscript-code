// find biggest number in array

function findBiggestNumber(arrayofNumber){
    if(!arrayofNumber || arrayofNumber.length==0){
        throw new Error("we need some in array")
    }
    let biggestNumber = arrayofNumber[0];
    for(let i=0; i<=arrayofNumber.length; i++){
        if(arrayofNumber[i]>biggestNumber){
         
            biggestNumber = arrayofNumber[i]
        }
    }
     return biggestNumber
}
console.log(findBiggestNumber([3,8,66,5,15,43]))