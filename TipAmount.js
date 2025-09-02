///calculate tip amount based on the bill total and percentage entered by the user.
function calculateTipAmount(baseAmount, tipPercentage){
    let result=[];
 for (let i = 0; i < tipPercentage.length; i++){
        let TipAmount = baseAmount*(tipPercentage[i]/100);
        TipAmount= TipAmount.toFixed(2);
        result.push(TipAmount)
    }
    return result;
}
console.log("100, [5,10,5]" ,calculateTipAmount(100,[5,10,5]))