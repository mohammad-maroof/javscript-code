//Find the palindrome number
var num = prompt('please enter a number');
var originalnum = num;
var reverse= 0;
while(num!=0){
    reverse = (reverse*10)+(num%10);
    num = parseInt(num/10)
}
if(originalnum == reverse){
    console.log(`${reverse} is a palindrome number`)
}
else {
    console.log(`${reverse} is not a plaindrome number`)
}