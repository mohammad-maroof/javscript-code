//transpose matrix(swap rows with columns)
function Transposematrix(inputArray){
    const numberofrows = inputArray.length;
    const numberofcolumns= inputArray[0].length;
    const result=[];
    for(let i=0; i<numberofrows; i++){
        for(let j=0; j<numberofcolumns; j++){
           
            if(!result[j]){
                result[j]=[];
            }
            result[j][i] = inputArray[i][j]
           
        }
    }
     return result;
}
const inputmatrix=[[3,4,7],
                    [5,6,9],
                     [2,3,1] ]
console.log(Transposematrix(inputmatrix))