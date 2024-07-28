//declaration
let fruits = ['apple','banana','cherry'];
console.log(fruits);

//using array methods

fruits.push('orange');
// fruits.pop();
// fruits.shift();
console.log(fruits);

//itration on array
fruits.forEach(function(fruit){
    console.log(fruit);
});

//map,filter,reduce
const num = [1,2,3,4,5];
const double = num.map(items => items*2);

let evennum = num.filter(items => items%2===0);
console.log(evennum);

let sm = num.reduce((total,nums) =>total+num,0);
console.log(sm);

