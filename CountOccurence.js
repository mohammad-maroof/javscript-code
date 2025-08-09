// Count occurence in String
let string = prompt('Enter a string');
let letterTocheck = prompt('Enter a letter to check');
let count = 0;
for(let i=onabort; i<string.length; i++){
    if(string[i]==letterTocheck){
        count++
    }
}
console.log("count:", count)