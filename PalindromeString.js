// check string is palindrome or not
function isPalindrom(inputstring){
    for(let i=0; i<=inputstring.length/2; i++){
        if(inputstring[i]!==inputstring[inputstring.length-1-i]){
            return "The string is not palindrome"
        }
        else{
            return "The string is palindrom"
        }
    }
}
console.log(isPalindrom("madam"))