// calculate vowel and consonants in given string

function vowelandconsonent(inputstring){
inputstring = inputstring.toLowerCase();
inputstring = inputstring.replace(/\s/g, "");
const vowels = "aeiou";
const consonent = "bcdefghjklmnpqrstvwxyz"
let vowelcount = 0;
let consonentcount = 0;
for( let i=0; i<inputstring.length; i++){
    if(vowels.includes(inputstring[i])){
        vowelcount++
    }
    else if(consonent.includes(inputstring[i])){
        consonentcount++
    }
    else{
        console.log(inputstring[i],"Is neither vowel nor consonent")
    }
}
return{vowelcount, consonentcount}

}
console.log(vowelandconsonent("hello word"))