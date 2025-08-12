// Smallest of three number
function SmallestNumOFthree(a,b,c){
    if(a<b && b<c){
        return a
   
    }
    else if(b<a && b<c){
          return b
      
    }
     else if(c<a && c<b){
          return c
       
    }
return a
}
console.log(SmallestNumOFthree(15,14,12))
console.log(SmallestNumOFthree(10,13,12))
console.log(SmallestNumOFthree(10,7,12))