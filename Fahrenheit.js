//convert a temperature celsius to fahrenheit

function calculatefahrenheit(celsius){
    if(celsius<1){
        throw new error("please enter a positive value")
    }
    let fahrenheit = ((celsius*9/5)+32);
    result = Math.round(fahrenheit)
    return result;
}
console.log("34",calculatefahrenheit(34))