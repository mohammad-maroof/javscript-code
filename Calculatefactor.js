// calculate the factor of the number

function calculatefactor(inputNumber){
    let result =[];
    if(inputNumber<1){
       throw new Error("number shpuld be greater then one")
    }
    for(let i=0; i<=inputNumber; i++){
        if(inputNumber %i ==0){
            result.push(i)
            console.log(i,'Is a factor number')
        }
        else{
            console.log(i, "Is not a factor")
        }
    }
    return result;
}
console.log('factor of 35 arr', calculatefactor(35))