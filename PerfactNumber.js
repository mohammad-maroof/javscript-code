//check number is perfect number or not
//6= divisible by 1,2,3 = 1+2+3=6 amd 6=6

var inputNumber=prompt('please enter a number')
function isperfactNumber(inputNumber){
    let properDivisor=[];
    if(inputNumber<0){
        console.log("number should be positive")
    }
    for(let i=1; i<inputNumber; i++){
        if(inputNumber%i===0){
            properDivisor.push(i);
        }
        console.log(i)
    }
    let sum=0;
    properDivisor.forEach(d=>{sum=sum+d});
    console.log("sum is", sum);
    return sum == inputNumber
}
console.log(isperfactNumber(inputNumber))