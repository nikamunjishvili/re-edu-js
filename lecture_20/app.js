"use strict";
// const container = document.querySelector(".container");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.slice(0, 3).forEach((item) => {
//       const content = document.createElement("div");

//       content.innerHTML = `
//         <h1>${item.title}</h1>
//         <img src=${item.image} alt=${item.title} style="width: 100px " />
//         `;
//       container.appendChild(content);
//     });
//   });

// const usersObj = {
//     id: 1,
//     name: "Mariam",
//     wuwuni: true,
//     child: [
//         {
//             name: "hugo"
//         }
//     ]
// }

// const array_obj = Object.entries(usersObj);
// array_obj.filter(item => console.log(item[0] + ": " + item[1]));

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// function objectKeys(obj_data){
//     const result = [];
//     for()
// }

// con

// console.log(objectKeys(obj));

//[a,b,c]

// const data = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// function getKey(obj_data) {
//   let keys = [];

//   const result = Object.keys(obj_data);
//   result.forEach((item) => {
//     keys.push(item);
//   });
//   console.log(keys);
// }

// getKey(data);

// function getValue(obj_data) {
//   let value = [];

//   const result = Object.values(obj_data);
//   result.forEach((item) => {
//     value.push(item);
//   });
//   console.log(value);
// }

// getValue(data);

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//   };
//   function objectkey() {
//     for (let key in obj) {
//       console.log(`${key}`);
//     }
//   }
//   objectkey();
//   function objectvalue() {
//     for (const value of Object.values(obj)) {
//       console.log(`${value}`);
//     }
//   }
//   objectvalue();

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//   };

// function objectKeys(obj_data){
//     const result = []
//     for (let key in obj_data) {
//     result.push(key);
//   }
//   return result;
// }

// console.log(objectKeys(obj));

// 5. იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];

// // return (accumulator < currentValue ? accumulator : currentValue);

// function minMax(items) {
//   var minMaxArray = items.reduce((num, items) => {
//     return num < items.price ? num : items.price;
//   });

//   return minMaxArray;
// }

// console.log(minMax(products));

// მინდა მქონდეს ერთი ფუნქცია რომელიც პარამეტრად მიიღებს callBack -ს და გამოძახებს.ეს ქოლბექი დააბრუნებს პარამეტრად
// და არგუმენტად მიღებულ მნიშვნელობას რამე სტრინგს;

// function getCall(foo) {
// return foo("result")
// }

// function callBack(a) {
//     return a;
// }

// console.log(getCall(callBack));

// function foo(callback) {
//   return callback(5, 5);
// }

// function ltl_sum(a, b) {
//   return a + b;
// }

// console.log(foo(ltl_sum));


//block scope
// {
//    var  x = 1;
// }

// console.log(x);

//function scope

// function myName(){
//     let name = "Ivan";
//     return name;
// }
// console.log(name);


let name = 20;



let x;

x = 10;

isFunction();


function isFunction(){

}



// const currentDate = new Date().getMonth();

// console.log(currentDate);

// console.log('hello' * 10)

// const  arr = [{
//     id: 1,
//     name: 'nika'
// },{
//     id: 2,
//     name: 'saba'
// }];

// const id = 
// arr.push({
//     id: arr.length + 1,
//     name: "goga"
// })
// arr.push({
//     id: arr.length + 1,
//     name: "david"
// })


// const result = arr.filter(user => user.id !== 1);
// console.log(result);