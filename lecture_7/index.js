// function openAlert() {
//   const main_container = document.getElementsByTagName("main")[0];
//   const box_container = document.createElement("div");
//   main_container.appendChild(box_container);
//   const prompt_width = prompt("enter container width...");
//   const prompt_height = prompt("enter container height...");
//   const prompt_backgroundColor = prompt("enter container backgroundColor...");

//   box_container.style.width = `${prompt_width}px`;
//   box_container.style.height = `${prompt_height}px`;
//   box_container.style.backgroundColor = `${prompt_backgroundColor}`;
// }

// openAlert();

// const card = document.querySelector(".card");

// button.addEventListener("click", () => {
//   let isLogedin = false;

//   if (!isLogedin) {
//     alert("hello");
//   }
// });

// setTimeout(() => {
//   alert("you registered succesfull!");
// }, 3000);

const button = document.getElementById("button");
const input = document.getElementById("input");
const card = document.querySelector(".card");

// button.addEventListener("click", () => {
//   console.log(`value: ${input.value}`);
//   const li = document.createElement("li");
//   li.textContent = "tasks";
//   card.innerHTML = `<h1>${input.value}</h1>`;
//   card.appendChild(li);
// });

function equalMathOperation() {
  const number_1 = prompt("enter container width...");
  const number_2 = prompt("enter container height...");

  card.innerHTML = number_1 * number_2;
}

// equalMathOperation()

//სამი ინფუტი გვაქვს სადაც უნდა შევიყვანოთ user firstName,email,password
// და გვჭირდება submit რომ დავაკლიკებთ ეს მონაცემები გამოგვიჩინოს
//ქვემოთ რაიმე დივში და ამის შემდეგ ამოგვივარდეს alert("you registered succesfull!!")
//გამოიყენეთ let isLogedin = false; და შეამოწმეთ if else დახმარებით!!

// let isLogedin = false;
// let fname = document.getElementById("fname");
// let email = document.getElementById("email");
// let pass = document.getElementById("pass");
// let submit = document.getElementById("submit");
// let result = document.getElementById("result");

// if (!isLogedin) {
//   submit.addEventListener("click", () => {
//     result.innerHTML = `<li>${fname.value}</li><li>${email.value}</li><li>${pass.value}</li>`;
//     setTimeout(() => {
//       alert("You are already Registered!");
//     }, 1000);
//   });
// }else{
//     alert("you are not registered!!")
// }

// const firstName = document.getElementById("firstName");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit = document.getElementById("button");

// submit.addEventListener("click", () => {
//   let isLogedin = false;
//   if (!isLogedin) {
//     const container = document.querySelector(".container");
//     const user_info = document.createElement("div");
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     user_info.appendChild(ul);
//     container.appendChild(user_info);
//     li.innerHTML = `username: ${firstName.value},<br/> email: ${email.value},,<br/> password: ${password.value}`;
//   } else {
//     alert("you registered succesfull!!");
//   }
// });

import { addContainer } from "./style.js";

const submit = document.getElementById("button");
const second_container = document.getElementById("second_container");

// submit.addEventListener("click", addContainer);

submit.addEventListener("click", () => {
  if (second_container.style.display === "none") {
    second_container.style.display = "block";
  } else {
    second_container.style.display = "none";
  }
});
