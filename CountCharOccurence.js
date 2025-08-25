//count the occurence of each character
function CountOccurrence(inputstring){
    inputstring = inputstring.toLowerCase();
    const splittedstring = inputstring.split("");

   const result= splittedstring.reduce((acc,char)=>{
    if(!acc[char]){
        acc[char]=0;
    }
    acc[char]=acc[char]+1;
    return acc;
   },{}) 
   console.log("Accumlater result is",result)
}
CountOccurrence("mohd maroof oooo")

//output is: Accumlater result is {m: 2, o: 7, h: 1, d: 1, " ": 2, …}