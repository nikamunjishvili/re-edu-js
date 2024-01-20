//es5:
// console.log(myName("nika", 22, "Tbilisi"));

// function myName(name, age, address) {
//   let myName = name;
//   let myAge = age;
//   let myAddress = address;

//   return `my name is ${myName}, i'm ${parseInt(myAge)} from ${myAddress}`;
// }

// console.log(myName("nika", 22, "Tbilisi"));

// const arrowFoo = (num) => {
//     return num * 2;
// }

// console.log(arrowFoo(4));

// (function () {
//   console.log("hello 1");
// })();

// const foo = function (){
//     return 10;
// }

// console.log(foo())

// const date = new Date();
// console.log(date);

// function myName(sayName, callBackFoo) {
//   console.log(`say my ${sayName}`);
//   return setInterval(() => {
//     return callBackFoo();
//   }, 3000);
// }

// function helloMyName() {
//   return console.log("heizenberg!!");
// }

// myName("name", helloMyName);

// let counter = 0;

// function IntervalTime() {
//   let setInter = setInterval(() => {
//     console.log(counter);
//     counter++;

//     if (counter === 10) {
//       clearInterval(setInter);
//       return console.log("ფუნქციამ მუშაობა შეწყვიტა");
//     }
//   }, 1000);
// }

// IntervalTime();


//n = 5;

//1 * 2 * 3 * 4 * 5

function fuctorial(n){
    if(n < 0){
        console.log("Invalid Input!!")
        return;
    }
    
    if(n === 1){
        return 1;
    }

    return fuctorial(n - 1) * n;
}

console.log(fuctorial(5))