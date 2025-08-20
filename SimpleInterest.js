// calculate simple interest

function calculateInterest(Pamount, interestrate, timeduration){
    let amount = ((Pamount*interestrate*timeduration)/100);
    return amount
}
console.log(calculateInterest(3000,10,5))