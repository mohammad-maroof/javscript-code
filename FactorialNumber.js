// Caluclate factorial of number
function calculatefactorial(inputNumber){
    if(inputNumber<0){
        throw new Error("inputNumber shoukd be greater than or equal to zero")
    }
    let result =1;
    for(let i=1; i<=inputNumber; i++){
        result *= i
    }
    return result
}
console.log("4!",calculatefactorial(4));
console.log("10!",calculatefactorial(10));
console.log("15!",calculatefactorial(15));