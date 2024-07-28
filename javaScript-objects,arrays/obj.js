//object declaration
let person = {
    firstName:'john',
    secondName:'cena',
    age:30,
    hobbies:['reading','workout','dancing']
};

//access and modifing

console.log(person.firstName);
person.age=34;
person.hobbies[0]='running';
console.log(person);

//add and deleting

person.email = 'iamraj@gmail.com';
delete person.hobbies;
console.log(person);