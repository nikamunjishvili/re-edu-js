// // let array = [1,2,3,4,5,8,6,7,7,8]
// // const set = new Set(array);
// // console.log(set)

// // let array = [1,2,3,4,5,8,6,7,7,8]
// // let newArr = [...new Set(array)]
// // console.log(newArr)

// // let list = [{ product_id: 1, price: 200 }, { product_id: 2, price: 50 }, { product_id: 3, price: 500 }]
// // for(let i =0 ; i<list.length ; i++){
// //     if(list[i].price < 100){
// //         list.splice(i)
// //     }
// // }
// // console.log(list)

// // filter().sort().map()

// // დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრების მასივს
// // მაგალითად fn([1, 2, 3, 3, 5, 2, 7, 8, 7, 10])
// // დააბრუნოს მასივის ყველა უნიკალური ელემენტი
// // მაგალითად [1, 2, 3, 5, 7, 8, 10]

// function uniqueElements(arr) {
//     const seen = new Set();
//     return arr.filter((item) => {
//       if (!seen.has(item)) {
//         seen.add(item);
//         return true;
//       }
//       return false;
//     });
//   }

//   // Write a function that will pass the phone number
//   // and the country
//   // for example fn("995599123456", "GE")
//   // if country is GE return +995599123456
//   // if country is US return +1(995)99123456
//   // if country is RU return +7(995)99123456
//   // if the country is different, return the error "we don't know what country this is"

//   function formatPhoneNumber(phoneNumber, country) {
//     switch (country) {
//       case "GE":
//         return `+995${phoneNumber}`;
//       case "US":
//         return `+1(${phoneNumber.substring(0, 3)})${phoneNumber.substring(3)}`;
//       case "RU":
//         return `+7(${phoneNumber.substring(0, 3)})${phoneNumber.substring(3)}`;
//       default:
//         return "we don't know what country this is";
//     }
//   }

//   3)document.getElementById('openUrlBtn').addEventListener('click', function() {
//       window.open('https://youtube.com/', '_blank');
//     });

//     5)
//     function processProducts(products) {
//       return products
//         .filter(product => product.price > 100) // Filter products with price > 100
//         .sort((a, b) => a.price - b.price) // Sort by price, ascending
//         .map(product => ({ ...product, is_manual: true })); // Add `is_manual: true` to each product
//     }

//     // Test the function with the provided input
//     const inputProducts = [
//       { product_id: 1, price: 200 },
//       { product_id: 2, price: 50 },
//       { product_id: 3, price: 500 }
//     ];

//     const processedProducts = processProducts(inputProducts);
//     console.log(processedProducts);

//     6)function findCommonElements(arr1, arr2) {
//       // Filter elements in arr1 that are also in arr2
//       return arr1.filter(element => arr2.includes(element));
//     }

//     // Test the function with the provided example
//     const result = findCommonElements([1, 2, 3], [2, 8, 1, 4]);
//     console.log(result); // Should log [1, 2]

//     7)function calculator(operator, a, b) {
//       switch (operator) {
//         case '+':
//           return a + b;
//         case '-':
//           return a - b;
//         case '*':
//           return a * b;
//         case '/':
//           if (b === 0) {
//             return 'Cannot divide by 0';
//           }
//           return a / b;
//         default:
//           return 'Invalid operator';
//       }
//     }

//     // Test examples
//     console.log(calculator('+', 5, 6)); // Should return 11
//     console.log(calculator('-', 5, 6)); // Should return -1
//     console.log(calculator('*', 5, 6)); // Should return 30
//     console.log(calculator('/', 5, 6)); // Should return approximately 0.8333333333333334
//     console.log(calculator('/', 0, 6)); // Should return 'Cannot divide by 0'

// const inputProducts = [
//   { product_id: 1, price: 200 },
//   { product_id: 2, price: 50 },
//   { product_id: 3, price: 500 },
// ];

// function product(product) {
//   return product
//     .filter((item) => item.price > 100)
//     .sort((a, b) => a.price - b.price)
//     .map((item) => {
//       return {
//         ...item,
//         is_manual: true,
//       };
//     });
// }

// console.log(product(inputProducts));

// დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრების მასივს
// მაგალითად fn([1, 2, 3, 3, 5, 2, 7, 8, 7, 10])
// დააბრუნოს მასივის ყველა უნიკალური ელემენტი
// მაგალითად [1, 2, 3, 5, 7, 8, 10]

// function fn (arr) {
//     const result = new Set(arr)
//     return result
// }

// console.log(fn(arr))

// const arr = [1, 2, 3, 3, 5, 2, 7, 8, 7, 10]

// function uniqueNumbers(numbers_array){
//     return [...new Set(numbers_array)];
// }

// console.log(uniqueNumbers(arr));

// დაწერეთ ფუნქცია რომელსაც გადასცემთ ტელეფონის ნომერს
// და ქვეყანას
// მაგალითად fn("995599123456", "GE")
// თუ ქვეყანა არის GE დააბრუნოს +995599123456
// თუ ქვეყანა არის US დააბრუნოს +1(995)99123456
// თუ ქვეყანა არის RU დააბრუნოს +7(995)99123456
// თუ ქვეყანა არის სხვა დააბრუნოს შეცდომა "არ ვიცით რა ქვეყანაა ეს"

// function phoneNumberFormatter(phoneNumber, countryCode) {
//   switch (countryCode) {
//     case "GE":
//       console.log("+995" + phoneNumber);
//       break;
//     case "US":
//       console.log("+1" + phoneNumber);
//       break;
//     case "RU":
//       console.log("+7" + phoneNumber);
//       break;
//     default:
//       console.log("Unknow  country code");
//       break;
//   }
// }

// phoneNumberFormatter("995599123456", "RU")

// document.querySelector("button").addEventListener("click", () => {
//   window.open("https://youtube.com/", "_blank");
// });

// 5)დავწეროთ ფუქნცია რომელიც 1. მიღებული არგუემენტებიას სიას გაფილტრავს (დატოვებს მხოლოდ პროდუქტებს რომელთა ფასი მეტია 100 სზე), 2. დასორტავს ფასის მიხედვით (პატარიდან ზევით) 3. ყოველ ელემენტზე დაამატებს ახალ ატრიბუტს is_manual: true ს.
// ინფუთი: [{ product_id: 1, price: 200 }, { product_id: 2, price: 50 }, { product_id: 3, price: 500 }]
// სასურველი output: [{ product_id: 1, price: 200 }, { product_id: 3, price: 500 }]
// სასურველია გამოვიყენოთ filter, sort, map მეთოდები გადაბმით (method chainning)

// const products = [
//   { product_id: 1, price: 200 },
//   { product_id: 2, price: 50 },
//   { product_id: 3, price: 500 },
// ];

// function newFilteredData(products) {
//   return products
//     .filter((item) => item.price > 100)
//     .sort((a, b) => a.price - b.price)
//     .map((item) => {
//       return {
//         ...item,
//         is_manual: true,
//       };
//     });
// }

// console.log(newFilteredData(products));

// const myName = function(){}

// {
//     // var names = 'nika';
// }

// console.log(names);

// const myName = 'mariam'//akin

// const result = myName.split("").reverse().join("");
// console.log(result);

// const arr = [1,1,1,1,1,1]
// // console.log(Math.max(...arr))

// console.log(arr.every(item => item === 1));

// if(false){
//     if(true){
//         console.log("hello")
//         if()
//     }
// }

// while(2 > 1){
//     console.log("Hello world");
//     break;
// }

// const array = [1,2,3,4,3,6,2];
// const uniqueNum = new Set(array);
// console.log(uniqueNum);

// const input2 = [
//   1,
//   [2, 3],
//   [4, 5, [6, 7, [8, 9]]],
//   10,
//   11,
//   12,
//   [13, 14, [15, 16, [17, 18]]],
// ];
// // const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


// const result = input2.flat(Infinity);
// console.log(result)