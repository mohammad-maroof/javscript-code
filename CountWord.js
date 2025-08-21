function countword(sentence){
    sentence = sentence.trim()
    const  splittedSentence = sentence.split(' ');
    const nonEmptyelement = splittedSentence.filter((element)=>element!=='');
    return nonEmptyelement.length;
}
console.log("this is a sentence",countword("This is  a   sentence"))