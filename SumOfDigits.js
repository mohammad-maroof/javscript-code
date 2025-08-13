// calculate sum of digits

function calculateSumOfDigits(inputNumber){
    if(inputNumber<1){
        throw new error("inputNumber must be a positive")
    }
  const inputNumAsString = inputNumber.toString();
    const splittedInputString = inputNumAsString.split('');
    console.log(splittedInputString);
    let sumofDigits = 0;
    splittedInputString.forEach(num=>{
        sumofDigits = sumofDigits+parseInt(num)
        console.log("Check", typeof(num))
    })
    return sumofDigits;
}
console.log(calculateSumOfDigits(12345))