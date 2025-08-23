//write a program that simulates rolling and dice

function DiceRoll(NumofDice, numofSides){
    const result = []
    for(let dice=1; dice<=NumofDice; dice++){
        const diceRollResult = (Math.floor(Math.random()*(numofSides-1+1)+1));
        result.push=(diceRollResult)
    }
    return result

}
const NumofDice= prompt("please enter a number");
const numofSides= prompt("please enter a sides");
console.log(DiceRoll(Number(NumofDice), Number(numofSides)));