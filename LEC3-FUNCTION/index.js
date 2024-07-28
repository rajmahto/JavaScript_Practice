console.log("Raj")
//function defination
function land()
{
    console.log("Kumar");
}
//calling the funtion
land();

//question print 1 to 100  using funtion;

// function count(){
//     for(let i=0;i<=100;i++){
//         console.log("");
//     }
// }
// count();

// funtion with parameters

function paramtr(num){
    console.log("kya print kru");
}
paramtr(5);

//function with 2 parameter;

function average(num1,num2){
    let avg = (num1 + num2)/2;
    console.log("Average ->",avg);
}
average(2,6);

//using return print sum of three number

function addThree(a,b,c){
    let sum=a+b+c;
    return sum;
}
let num = addThree(2,3,4);
console.log("Printing 3 num sum ->",num);




