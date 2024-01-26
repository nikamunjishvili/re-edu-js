// const firstName = "Nika Munjishvili";

// if (firstName.indexOf("i") === 0) {
//   console.log("The name starts with Nika");
// } else {
//   console.log("The name does not start with Nika");
// }

// const wellcome = "Hello";

// const result = wellcome.replace("Hello", "Nika");
// console.log(result);

// function myName(firstName) {
//   return firstName.replace("Hello", "Nika");
// }

// console.log(myName("Hello"));

// const wellcome = "Hello Nika my name is Nika";

// console.log(wellcome.replaceAll("Nika", "George"));

const myName = "   Hello World!!   ";
// console.log(myName);
//"Hello World"

// console.log(myName.trim());

// if(myName){
//     console.log(myName.trim());
// }

// const firstName = "Nika Munjishvili";

// console.log(firstName.toUpperCase());

// const lastName = "NIKA Munjishvili";

// console.log(lastName.toLowerCase());

// const email = 'nika@gmail.com';

// function validateUser() {
//     if(email.includes("com")){
//         return "It's validate";
//     }else{
//         return "Not validate";
//     }
// }

// console.log(validateUser());

// const firstNames = "nick";

// console.log(firstNames.charAt(0).toUpperCase());

// if(firstNames.charAt(0).toUpperCase()){
//     console.log("user is validate!!")
// }else{
//     console.log("not validate");
// }

// const hello = "Hello";
// const firstName = "Nick";

// console.log(hello.concat(" ",firstName));
// console.log(firstName);

// const hello = "Hello";

// console.log(hello.repeat(1))

// const firstName = "Nika Munjishvili";

// console.log(firstName.slice(0, 1));

// const users = [
//     {name: "nick", email: "nika@gmail.com"},
//     {name: "saba", email: "saba@gmail.com"},
// ]

// console.log(users.slice(0, 1))

// const text = 'hello how are you??';

// console.log(text.split(" "));

// const age = 10;

// const result = age.toString();
// const input = prompt('write something...').toString();
// const result2 = input;

// console.log(result);
// console.log(typeof result);
// console.log(typeof result2);

// const user = {
//   name: "Nikolay",
//   age: 34,
// };

// const result = user.age >= 18 ? "hello" : "error";
// if (result) {
//   console.log(`${user.name} is an adult`);
// }

// function isUser() {
//   const result = user.age >= 18 ? "hello" : "error";
//   return result;
// }

// console.log(isUser());

// const submit_btn = document.querySelector(".button");
// const email_input = document.querySelector("#email");
// const password_input = document.querySelector("#password");
// const main_page = document.querySelector(".home_page");
// const form = document.querySelector(".form");

// main_page.style.display = "none";

// submit_btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const email = email_input.value;
//   const password = password_input.value;

//   const result =
//     email && password
//       ? ((main_page.style.display = "block"),
//         (form.style.display = "none"),
//         (main_page.innerHTML = `
//         <div>
//         <h1>data: ${email}, ${password}</h1>
//         </div>

//         `))
//       : (main_page.style.display = "none");
//   return result;
// });

// function replaceSentence(rezervedWord, replacedWord) {
//   return rezervedWord.replace(rezervedWord, replacedWord);
// }

// console.log(replaceSentence("Hello", "Hi"));

// function trimFoo(trimText) {
//     console.log(trimText)
//   return trimText.toLowerCase();
// }

// console.log(trimFoo("   Hello World   "));

// function trimFoo(email) {
//   if (email.includes("@")) {
//     return "Valid Email!!";
//   } else {
//     return "Invalid Email!!";
//   }
// }

// console.log(trimFoo("nickgmail.com"));


const word = 'hello';
console.log(word);

const result = word.charAt(0).toUpperCase();

console.log(result);