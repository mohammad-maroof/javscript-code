// calculate factorial using recursion
function factorialRecursin(inputNumber){
    if(inputNumber<0){
        throw new Error("inputNumber should be greater than or equal to zero")
    }
    else if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }
  return inputNumber*factorialRecursin(inputNumber-1)
}
console.log("5!",factorialRecursin(5))