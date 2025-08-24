// find that multiples of 3 with "fizz"
//multiples of 5 with "buzz"
//multiples of both 3&5 with "fizzbuzz"

function fizzbuzz(number){
    for(let i=0; i<=number; i++){
         if(i%3==0 && i%5==0){
            console.log(`${i} is fizzbuzz`)
        }
        else if(i%3==0){
            console.log(`${i} is  fizz`)
        }
      
        else if(i%5==0){
            console.log(`${i} is Buzz`)
        }
       
      
        else{
            console.log(i)
        }
    }
}
console.log(fizzbuzz(30))