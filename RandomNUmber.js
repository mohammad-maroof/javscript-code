//find a random number 
function RandomnNum(number){
    for(let i=0; i<number; i++){
       const maxNumber = 21;
       const minNumber = 10;
       var result = (Math.floor(Math.random()*(maxNumber-minNumber)+minNumber))
       console.log(result)
    }
}
console.log(RandomnNum(20))