function generatepyramind(inputnumber){
    for(let i=1; i<=inputnumber; i++){
        let linecontent='';
        for(let space=i; space<=inputnumber; space++){
            linecontent=linecontent+" ";
        }
       for(let count=1; count<=i; count++){
            linecontent = linecontent+count;
        }
        for(let reverseCount=i-1; reverseCount>=1; reverseCount--){
            linecontent = linecontent+reverseCount
        }
         console.log(linecontent)
    }
}
generatepyramind(5)
///output is
/*1
    121
   12321
  1234321
  123454321
  */