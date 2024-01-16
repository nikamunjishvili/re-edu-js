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

const biggestNumber = (a, b, c) => {
  const maxNum = Math.max(a, b, c);
  return "მაქსიმალური რიცხვი არის ", maxNum;
};
console.log(biggestNumber(23, 99, 100));

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

function calculator(num1, num2, a) {
  if (a === "+") {
    let incrementResult = num1 + num2;
    return incrementResult;
  } else if (a === "-") {
    let incrementResult = num1 - num2;
    return incrementResult;
  } else if (a === "*") {
    let incrementResult = num1 * num2;
    return incrementResult;
  } else if (a === "/") {
    let incrementResult = num1 / num2;
    return incrementResult;
  } else {
    console.log("Number is not found!!");
  }
}

console.log(calculator(10, 20, "+"));
