// find the all occurence

const string = "This is big Sentences and big word with big repeadted";
const findToword = "big"
function findAlloccurences(big,word){
    let result =[]
    let index = big.indexOf(word);//indexOf("big") returns the position of the first match of "big" in big.
    console.log(word)
    while(index!==-1){
        result.push(index);
        console.log(index)
        index = big.indexOf(word,index+1);
}
return(result)
}
console.log(findAlloccurences(string, findToword))