//check string is alphabetical order 
function isalphabeticalorder(inputstring){
inputstring = inputstring.replace(/\s/g, '');
    for(let i=0; i<=inputstring.length-1;i++){
        if(inputstring[i]>inputstring[i+1]){
     return 'This string is unorder'
        }
    }
    return 'This string is order'
}
console.log("abchijkl", isalphabeticalorder("abchijkl"))