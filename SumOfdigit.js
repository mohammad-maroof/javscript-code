// find sum of digits
let num = prompt('please enter  number')
let sum =0;
while(num>0){
    let rem = num%10;
    sum = sum+rem
    num = parseInt(num/10);
}
console.log(`sum of digit ${sum}`)