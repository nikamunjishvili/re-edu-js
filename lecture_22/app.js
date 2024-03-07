// let arr = [3, 7, 2, 8, 5];
// function high(array) {
//   return Math.max(...array)
// }
// console.log(high(arr));

const input2 = [
  1,
  [2, 3],
  [4, 5, [6, 7, [8, 9]]],
  10,
  11,
  12,
  [13, 14, [15, 16, [17, 18]]],
];
// const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// function flatDeep(input) {
//   let result = [];
//   for (const element of input) {
//     if (Array.isArray(element)) {
//       result = result.concat(flatDeep(element));
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// }

// console.log(flatDeep(input2));

//   const result = input2.flat(Infinity);
//   console.log(result)

// // const users = [];
// import { userObj } from "./data.js";
// const signup_button = document.getElementById("signup");
// const home_page = document.querySelector(".home_page");
// const form = document.querySelector(".form");

// let users = [];
// function signup() {
//   users.push(userObj);
//   localStorage.setItem("users", JSON.stringify(users));
//   home_page.style.display = "block";

//   const get_data = JSON.parse(localStorage.getItem("users"));
//   if (home_page.style.display === "block") {
//     form.style.display = "none";
//     get_data.forEach((user) => {
//       home_page.innerHTML = `
//       <ul>
//       <li>username: ${user.name}</li>
//       <li>lastname: ${user.lastname}</li>
//       <li>phone: ${user.phone}</li>
//       <li>email: ${user.email}</li>
//       <li>password: ${user.password}</li>
//       <button id="delete_user">Delete User</button>
//       </ul>
//       `;
//     });
//   }
//   deleteUser();
// }

// signup_button.addEventListener("click", signup);

// function getUser() {
//   // document.getElementById("delete_user").addEventListener("click", () => {
//     localStorage.getItem('users');
//   // })
// }

// document.addEventListener("DOMContentLoaded", getUser)

// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const signup_button = document.getElementById("signup");

// function fetchedData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       const newData = [
//         ...data,
//         {
//           id: data.length + 1,
//           name: username.value,
//           email: email.value,
//           password: password.value,
//         },
//       ];
//       console.log(newData);
//     });
//       localStorage.setItem("gujas_data", JSON.stringify([...newData]));
// }

// signup_button.addEventListener("click", fetchedData);

// fetch("", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("users data", data);
//   });

// fetch("https://jsonplaceholder.typicode.com/users/3", {
//   method: "POST",
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     id: 1,
//     message: "User with Id Posted",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
