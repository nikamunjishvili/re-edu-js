// const input = document.querySelector("input");
// const button = document.getElementById("search");
// const toggle_mode = document.getElementById("toggle_mode");

// toggle_mode.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   if (toggle_mode.textContent === "dark") {
//     toggle_mode.textContent = "light";
//   } else {
//     toggle_mode.textContent = "dark";
//   }
// });

// button.addEventListener("click", () => {
//   let searchTerm = input.value;

//   try {
//     fetch(`https://api.github.com/users/${searchTerm}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const content_container = document.createElement("div");
//         const content = document.getElementById("content");

//         content_container.innerHTML = `
//         <div>
//         <img src=${data.avatar_url} alt=${data.login} style="width:50px; border-radius: 50%; height: 50px" />
//         <h1>${data.name}</h1>
//         <h4>${data.bio}</h4>
//         <p>${data.location}</p>
//         </div>
//         `;

//         button.innerHTML = `<span class="loader"></span>`;
//         content.appendChild(content_container);
//       });
//   } catch (error) {
//     alert("message", error);
//   }
// });

// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit_button = document.getElementById("submit");
// const landing_page = document.querySelector(".landing_page");
// const form = document.querySelector("form");

// submit_button.addEventListener("click", registerUserForm);

// function registerUserForm(event) {
//   event.preventDefault();
//   let user_data = [];
//   const email_value = email.value;
//   const password_value = password.value;

//   user_data.push({
//     email: email_value,
//     password: password_value,
//   });

//   if (
//     email_value === "" &&
//     password_value === "" &&
//     !email_value.includes("@")
//   ) {
//     alert("Please write something...");
//   } else {
//     landing_page.style.display = "block";
//     form.style.display = "none";
//     localStorage.setItem("data", JSON.stringify(user_data));
//   }

//   getUserFromStorage();
// }

// function getUserFromStorage() {
//   const getUser = JSON.parse(localStorage.getItem("data"));

//   getUser.forEach((item) => {
//     const ul = document.querySelector("ul");
//     const list = document.createElement("li");
//     list.innerHTML = `Email: ${item.email} - Password: ${item.password}`;
//     ul.appendChild(list);
//   });
// }

// function resultUserMap(user_data) {
//   return user_data.map((user) => {
//     return {
//       ...user,
//       isMarried: false
//     };
//   });
// }

// console.log(resultUserMap(users));

// const users = [
//   { id: 1, username: "nika", email: "nika@gmail.com" },
//   { id: 2, username: "luka", email: "saba@gmail.com" },
//   { id: 3, username: "saba", email: "george@gmail.com" },
// ];

// const filteredData = users.filter(
//   (user) => user.email === !user.email.includes("@")
// );

// const filtered = users.filter(data => data.username === "saba")
// console.log(filtered);

// console.log(filteredData);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.reduce((sum, num) => {
//   return sum * num;
// }, 2);
// console.log(result);

// const randomNumber = Math.random(10).toFixed();

// console.log(randomNumber);

const students = [
  { id: 1, name: "george", sallary: 100, age: 16 },
  { id: 2, name: "nika", sallary: 300, age: 19 },
  { id: 3, name: "saba", sallary: 0, age: 14 },
  { id: 4, name: "david", sallary: 150, age: 22 },
  { id: 5, name: "luka", sallary: 0, age: 27 },
];

const result = students.reduce(
  (res, item) => {
    if (item.age >= 18) {
      res.adult++;
    } else {
      res.teen++;
    }
    
    if (item.sallary === 0) {
      res.unemployed++;
    }

    return res;
  },
  { teen: 0, adult: 0, unemployed: 0 }
);

console.log(result);
