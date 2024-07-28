// const user = {
//     username: "Raj",
//     price:999,

//     WelcomeMessage: function(){
//         console.log(`${this.username},Welcome bhai apka swagat h hmare javascript ke code me`);
//         console.log(this);
//     }
// }
// user.WelcomeMessage()
// user.username = "Deepak"
// user.WelcomeMessage()

// // console.log(this);

function chai(){
    // console.log(this);
}
chai()


const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(2,3));

const addTwoA = (num1,num2) => num1+num2
console.log(addTwoA(5,6));