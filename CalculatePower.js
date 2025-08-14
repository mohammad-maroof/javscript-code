// calculate power guven number
function calculatePower(base, exponent){
    let result =1;
    for(let i=1; i<=exponent; i++){
        result = result*base;
        //console.log(result)
    }
    return result;
}
console.log(calculatePower(5,4))
console.log(calculatePower(3,4))
console.log(calculatePower(4,4))