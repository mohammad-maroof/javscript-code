function reverseString(inputstring){
    if(typeof inputstring !== "string"){
        throw new Error("only string are allowed")
    }
    let result = '';
    for(let i= inputstring.length-1; i>=0; i--){
        result +=inputstring[i]
    }
    return result;

}
console.log(reverseString("Shaikh"));
console.log(reverseString("FOORAM"))