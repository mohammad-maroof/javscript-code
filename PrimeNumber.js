//check prime number or not
//A prime number can only be divided evenly by 1 and itself — it has no other divisors.
const num = prompt("please Enter a number");

if(num==1){
    console.log(`${num} is neither prime nor composite`)
}
else if(num<1){
    console.log(`${num} not a prime number`)
}
else{
for(let i=2; i<num; i++){
    if(num%i==0){
        var res =`${num} is not prime number`
        break;
    }
    else{
       var res=`${num} is prime number`
    }
}
console.log(res)
}
