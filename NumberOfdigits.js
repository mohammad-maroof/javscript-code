// write a javscript programme to find number of digits in given number.
var num = prompt('please enter number')
var temp = num;
var c=0;
while(temp>0){
    c= c+1;
    temp = parseInt(temp/10);
}
console.log(`Totale number of digits ${num} is ${c}`)