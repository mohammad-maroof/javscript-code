
//find multiplication of number
/*var num = prompt("please enter a number");
for(let i=1; i<=10; i++){
    console.log(`${num}*${i}=${num*i}`)
}*/

// using function
function multiplication(tableoff, tablelist){
    for(let i=1; i<=tablelist; i++){
        console.log(`${tableoff}*${i}= ${i*tableoff}`)
    }
}
multiplication(2,10)