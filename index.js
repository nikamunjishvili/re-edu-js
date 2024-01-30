// // //1

// // let size = "medium";
// // size = "small";
// // // let size = 'ragaca';
// // console.log(size);
// // // Using const
// // const shape = "circle";
// // shape = "square"; // result
// // console.log(shape);
// // // const shape = "triangle"; // result:

// // //1
// // let count = 10;

// // // count++; // 11
// // count--; // 9

// // ++count; //
// // --count; //

// // console.log(count);

// // //2
// // let sum = 5 + 3;
// // let isEqual = 5 === "5"; // false

// // //3
// // let firstName = "George";
// // let lastName = "Giorgadze";

// // let greeting = `hello my name is ${firstName} and my lastName is ${lastName}`;

// // console.log(greeting); // Outputs: Hello, my name is George Giorgadze.

// // //4
// // let value = 7;

// // let result = value > 5 && value < 10;
// // let isOutsideRange = value < 5 || value > 10;

// // console.log(result); // true
// // console.log(isOutsideRange); // false

// // //5
// // let x = 5;
// // let y = 10;

// // let andOperator = x > 0 && y > 0; //result: true
// // let orOperator = x < 0 || y > 0; //result: true
// // let notOperator = !(x > 10); //result: false => ! true

// //1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
// //მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
// //მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
// //ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// const pension = (pensionAge, currentAge) => {
//   let left = pensionAge - currentAge;

//   return left;
// };

// console.log(pension(65, 21));

// //2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// // რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// // ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// // რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// // მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

// // const calculator = (num1 , num2 , "*")

// //3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// // პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// // ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
// //გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// const checkPasswordStrength = (password) => {
//   if (password.length < 8) {
//     console.log("should be at least 8 characters");
//   } else if (password.length > 16) {
//     console.log("should be up to 16 characters");
//   } else if (password === "") {
//     console.log("This field is required");
//   } else {
//     console.log("hello");
//   }

//   // return checkPasswordStrength
// };
// checkPasswordStrength("35796");

// //4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
// //და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში
// //ეს ყვავილი ნაპოვნია!!

// const garden = (flowers) => {
//   switch (flowers) {
//     case "rose":
//       console.log("roses are found");
//       break;
//     case "tulips":
//       console.log("tulips are found");
//       break;
//     case "wisteria":
//       console.log("wisterias are found");
//       break;

//     default:
//       console.log("flowers can't be found");
//       break;
//   }
// };
// garden("ragac");

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

// const biggestNumber = (a, b, c) => {
//   const maxNum = Math.max(a, b, c);
//   return "მაქსიმალური რიცხვი არის ", maxNum;
// };
// console.log(biggestNumber(23, 99, 100));

// //3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// // პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// // ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
// //გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// function checkPasswordStrength(input) {
//   if (input === "") {
//     console.log("Invalid Input!!");
//   } else if (input.length < 8) {
//     console.log("input is required!!");
//   } else if (input.length > 16) {
//     console.log("გრძელია 16!!");
//   } else {
//     console.log("დაარეგისტრირე!!");
//   }
//   return input;
// }

// console.log(checkPasswordStrength("helldsdsdso"));

// const checkPasswordStrength = (password) => {
//   if (password.length < 8) {
//     console.log("should be at least 8 characters");
//   } else if (password.length > 16) {
//     console.log("should be up to 16 characters");
//   } else if (password === "") {
//     console.log("This field is required");
//   } else {
//     console.log("hello");
//   }

//   return checkPasswordStrength;
// };

// checkPasswordStrength("35796");

// //2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// // რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// // ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// // რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// // მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

// function calculator(num1, num2, a) {
//   if (a === "+") {
//     let incrementResult = num1 + num2;
//     return incrementResult;
//   } else if (a === "-") {
//     let incrementResult = num1 - num2;
//     return incrementResult;
//   } else if (a === "*") {
//     let incrementResult = num1 * num2;
//     return incrementResult;
//   } else if (a === "/") {
//     let incrementResult = num1 / num2;
//     return incrementResult;
//   } else {
//     console.log("Number is not found!!");
//   }
// }

// console.log(calculator(10, 20, "+"));

// const toggle = document.getElementById("toggle");

// toggle.addEventListener('click', () => {
//     document.body.classList.toggle("dark-theme");
// });

// let count = 1;

// while (count <= 5) {
//     console.log(count);
//     count++;

//   if(count === 5){
//     break;
//   }
// }

// let fruits = ["apple", "banana", "cherry"];
// let index = 0;

// while (index < fruits.length) {
//     console.log(fruits[index]);
//     index++;
// }

// let isActive = true;
// let timer = 0;

// while (isActive) {
//     console.log("Timer: " + timer + " seconds");
//     timer++;

//     if (timer > 10) {
//         isActive = false;
//     }
// }

//ჩაციკვლა

// let number = 1;

// while (true) {
//     if (number % 5 === 0) {
//         console.log("First multiple of 5 found: " + number);
//         break;
//     }
//     number++;
// }

// let num = 0;

// while (num < 10) {
//     num++;

//     if (num % 2 === 0) {
//         continue;
//     }

//     console.log("Odd number: " + num);
// }

// const cars = ["Ferrari", "Porche", "Mazda", "Subaru"];

// let i = 0;
// while (i < cars.length) {
//   console.log(cars[i]);
//   i++;
// }

// let i = 9;

// do{
//   console.log("Hello World");
// }
// while(i < 10);

// const cars = ["Ferrari", "Porche", "Mazda", "Subaru"];

// for(const car of cars){
//   if(car == "Porche") continue;
//   console.log(car)
// }

// const cars = [`Ferrari`, `Porsche`, `BMW`, `Subaru`];
// //                0          1        2        3
// cars.forEach((car, index, array) => {
//     console.log(`Car name is - ${car}, index is - ${index}`);
//     console.log(array);
// });

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// numbers.forEach(function (number) {
//   doubledNumbers.push(number * 2);
// });

// console.log(doubledNumbers);

// let userInput;
// const targetValue = 'exit';

// do {
//   userInput = prompt('Enter a value (type "exit" to quit):');
//   console.log('You entered: ' + userInput);
// } while (userInput !== targetValue);

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// numbers.forEach(function (number) {
//   sum += number;
// });

// console.log(`The sum of numbers is: ${sum}`);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];

// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(`Even numbers in the array: ${evenNumbers}`);

// const words = ["hello", "world", "javascript"];
// const capitalizedWords = [];

// words.forEach(function (word) {
//   const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//   capitalizedWords.push(capitalizedWord);
// });

// console.log(capitalizedWords);

//1)
// let count = 1;

// do {
//   console.log("count:", count);
//   count++;
// } while (count <= 10);

//2)
const arraynum = [1, 2, 3, 4, 5];
const doubleNum = [];

arraynum.forEach((sum) => {
  doubleNum.push(sum * 2);
});

// console.log(doubleNum);

//3)

// let userInput;
// const targetValue = "exit";

// do{
//   userInput = prompt("enter valid type<exit>");
// }
// while(userInput !== targetValue)

//4)
// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// numbers.forEach(number => {
//   sum += number;
// })

// console.log(sum);

//5)

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];
// newArr.forEach(number => {
//   if(number % 2 === 0){
//     evenNumbers.push(number);
//   }
// })
// console.log(evenNumbers);

//6)
// const array = ["hello", "world", "javascript"];
// const capitalizedWords = [];

// array.forEach((word) => {
//   capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
// });

// console.log(capitalizedWords);
