// const buttons = document.querySelectorAll(".button");
// const choose_number = document.getElementById("number");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//     // console.log(button.textContent);
//     button.style.display = 'none';
//     choose_number.textContent = button.textContent;
//   });
// });

// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const error = document.getElementById("error");

// input.addEventListener("focus", () => {
//   input.style.outlineColor = "red";
//   error.textContent = "input it required!!";
//   error.style.color = "red";
//   error.style.display = "block";
// });

// button.addEventListener("click", () => {
//   button.style.backgroundColor = "grey";
//   button.style.color = "black";
//   if (input.value === "") {
//     alert("plz enter something...");
//   }else{
//     alert("you registered sucessfull!!")
//   }
// // });

// const select = document.getElementById("select");
// const input = document.getElementById("input");

// select.addEventListener("change", (event) => {
//   const bgColor = event.target.value;
//   document.body.style.backgroundColor = bgColor;
// });

// input.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     alert(event.target.value);
//   }
// });

// input.addEventListener("focusin", (event) => {
//   input.style.outlineColor = "red";
//   error.textContent = "input it required!!";
//   error.style.color = "red";
//   error.style.display = "block";
// });

// input.addEventListener("focusout", (event) => {
//   console.log("focus outed");
//   error.style.display = "none";
// });

// const signup_button = document.getElementById("button");

// signup_button.addEventListener("click", () => {
//   window.location.reload();
// });

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     alert("Wellcome!!");
//   }, 2000);
// });

// const signup_button = document.getElementById("button");

// signup_button.addEventListener('mouseover', () => {
//     signup_button.style.backgroundColor = 'red'
// });

// signup_button.addEventListener('mouseout', () => {
//     signup_button.style.backgroundColor = 'black';
//     signup_button.style.color = 'white';
// });

// import { Button } from "./styles/styled.js";

// Button("200px", "40px", "red", "click me!!", true);
// Button("100px", "30px", "blue", "submit me!!", true);
// Button("300px", "20px", "gold", "registered me!!", false);

// const input = document.getElementById("input");
// const button = document.getElementById("button");
const main = document.querySelector(".main");

// button.addEventListener("click", () => {
//   const image = document.createElement("img");
//   const image_url = input.value;
//   localStorage.setItem('image url', image_url);
//   image.src = image_url
//   image.style.width = "100px";
//   image.style.height = "100px";
//   main.appendChild(image);
// });


//   const h1 = document.createElement("div");

//   h1.innerHTML = '<h1>Hello World!!</h1>'
//   main.appendChild(h1);
