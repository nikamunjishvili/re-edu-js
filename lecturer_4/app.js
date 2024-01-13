// if (isLogedin.email !== "" && isLogedin.password !== "") {
//   console.log("დაარეგსტრირე");
// } else {
//   console.log("უნდა დარეგისტრრიდე");
// }

// const user_data = {
//   email: "nika@gmail.com",
//   password: "12347654",
// };

// switch (user_data.email && !user_data.password) {
//   case "nika@gmail.com":
//     console.log("ნაპოვნია");
//     break;

//   case "12347654":
//     console.log("ნაპოვნია");
//     break;
//   default:
//     console.log("მომხმარებელი არარის ნაპოვნი!!");
//     break;
// }

// let num = Number(prompt("enter something..."));

// let int = 20;
// let floatNum = 20.5;

// console.log(`${int} ${floatNum}`);

// console.log(num)
// if (num > 0) {
//   console.log("დადებითია");
// } else if (num < 0) {
//   console.log("უარყოფითი");
// } else {
//   console.log("რიცხვი ნაპოვნი არარის!!");
// }

// console.log(myName("nika", 21, "nika@gmail.com", "Gori"));

// //es5:
// function myName(names, age, email, address) {
//   let user_array = [names, age, email, address];
//   return user_array;
// }

// console.log(myName("nika", 21, "nika@gmail.com", "Gori"));

// //es6:
// const myInfo = (names, age) => {
//   // () => {}
//   let num1 = names;
//   let num2 = age;

//   let result = num1 + num2;
//   return result;
// };

// console.log(myInfo(10, 22))

// const fruits = (fruit) => {
//   switch ((fruit, names)) {
//     case "ვაშლი":
//       console.log(`${fruit} არის მწვანე`);
//       break;

//     case "მსხალი":
//       console.log(`${fruit} არის ყვითელი`);
//       break;
//     default:
//       console.log("არცერთი ხილი არარის ნაპოვნი!!");
//       break;
//   }
// };

// fruits("მსხალი");

// გვინდა გვქონდეს ფუნქცია რომელიც პარამეტრად მიიღებს
// თქვენს ინფორმაციას,სახელს,გვარს,ასაკს,პროფესიას და მისამართს
//გვჭირდება ეს პარამეტრები შევინახოთ ცვლადებში და შემდეგ ავაწყოთ ეს მონაცემი
// ერთი წინადადებით!!

// function userReturn(firstName, LastName, adress, proffesion) {
//   let myName = firstName;
//   let myLastName = LastName;
//   let myAdress = adress;
//   let myProffesion = proffesion;
//   return `hello my name is ${myName} and my last name is ${myLastName} I live in ${myAdress} and my proffesion is ${myProffesion}.`;
// }

// console.log(
//   userReturn("nika", "xucishvili", "Rustavi", "junior web developer")
// );

// const myinfo = (name , lastname , age , work , address ) => {
//     let myName = name
//     let lastname = "korkelia";
//     let age = 19;
//     let work = "programer";
//     let address = "tbilis";

//     let info = myName + lastname + age + work + address;
//     return info
// };

// myinfo("nika")

// function info(a, b, c, d, e) {
//   return (
//     "მე ვარ " +
//     a +
//     " " +
//     b +
//     ", ვარ " +
//     c +
//     " წლის, პროფესიით " +
//     d +
//     ".  ვცხოვრობ " +
//     e +
//     "-ში"
//   );
// }

// let names = prompt("სახელი");
// let surnames = prompt("გვარი");
// let age = prompt("ასაკი");
// let proffesion = prompt("პროფესია");
// let adress = prompt("მისამართი");

// console.log(info(names, surnames, age, proffesion, adress));

// const user_info = (name, lastname, age, profesion, address) => {
//   let userName = name;
//   let userLastName = lastname;
//   let userAge = age;
//   let userProffesion = profesion;
//   let userAddress = address;
//   return `my name is ${userName} ${userLastName}, ${userAge} years old and I am ${userProffesion}. I am from ${userAddress}. `;
// };
// console.log(user_info("Mariam", "Jagmaidze", 25, "psychologist", "Tbilisi"));

// const myinfo = (name, lastname, age, work, address) => {
//   let myname = name;
//   let mylastname = lastname;
//   let myage = age;
//   let mywork = work;
//   let myaddress = address;

//   let info = myname + mylastname + myage + mywork + myaddress;
//   return info;
// };

// console.log(myinfo("robi", "korkelia", 19, "programer", "tbilisi"));

// const information = (saxeli, gvari, asaki, profesia, misamarti) => {
//   let firstName = saxeli;
//   let lastName = gvari;
//   let age = asaki;
//   let proffesion = profesia;
//   let adress = misamarti;
//   return `hello my name is ${firstName} lastname ${lastName} i am ${age} years old  my proffesion is ${proffesion} i live in${adress}`;
// };
// console.log(
//   information("guja", "kupreishvili", "20", "web-developer", "kutaisi")
// );

let obj = {
  name: "nika",
  age: 21,
};

function user({ name, age }) {
  let user = [name, age];
  return user;
}

console.log(user({ name: "nika", age: 21 }));
