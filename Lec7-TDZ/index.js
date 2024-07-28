// global scope
// const age = 15;
// console.log(age);

// {
//     console.log(age)
// }

//function scope

// function sayHelo(){
//     var name = "Bhai";
//     console.log("Heloo",name);
// }
// sayHelo();
// console.log(name);

class Human {
    age = 13;
    wt = 40;
    ht = 180;


    walking(){
        console.log("I am walking");
    }
     
    running(){
        console.log(" I am Running");
    }
}



let obj = new Human();
console.log(obj.age);
obj.walking();