

// fetch('https://jsonplaceholder.typicode.com/users/${}', {
//     method: "PUT",
//     headers: {
//         ''
//     },
//     body: {

//     }
// })
// .then(response => response.json())
// .then(data => {
//     data.forEach(item => console.log(item))
// })

// const users = [{ id: 1, name: "nika" }];

// console.log(users);

// const jsonData = JSON.stringify(users);
// console.log(jsonData);

// const parseJsonData = JSON.parse(jsonData);
// console.log(parseJsonData);

// let username = "nika";
// let lastname = "munjishvili";

// const users_data = [
//   {
//     id: 1,
//     username: username,
//     lastname: lastname,
//     email: "nika@gmail.com",
//     address: [
//       {
//         city: "Tbilisi",
//         location: [
//           {
//             id: 1,
//             ip: "location1345432",
//           },
//         ],
//       },
//     ],
//     fullName: function () {
//       return `${this.username} ${this.lastname}`;
//     },
//   },
// ];
// // console.log(users_data[0].address[0].location[0].ip);
// console.log(users_data[0].fullName());

//გვინდა გქვონდეს users მასივი და ამ მასივში ობიექტი ჩვენს შესახებ რომელშიც გვექნება სხბვდასხვა ინფორმაცია
// და გვექნება ერთი ფუნქცია რომელიც ამ ყველა ინფორმაციას სტრინგად დაგვიბრუნებს.

// let userName = "nugo";
// let lastNaem = "khutsishvili";

// let users = [
//   {
//     id: 1,
//     username: userName,
//     lastname: lastNaem,
//     combineInfo: function () {
//       return `${this.id}${this.username}${this.lastname}`;
//     },
//   },
// ];
// console.log(users[0].combineInfo());

const users_data = [
  {
    username: "Mariam",
    lastname: "Gagnidze",
    age: 21,
    email: "gagnidzeem@gmail.com",
    address: [
      {
        city: "Tbilisi",
        location: [
          {
            id: 1079,
            street: "I.Abashidze 62",
          },
        ],
      },
    ],
    job: "Project Manager",
    education: "student",
    fullInfo: function () {
      return `My name is ${this.username} ${this.lastname}I am ${this.age} years old ${this.job} and I am ${this.education} as well
        living in ${this.address[0].city},my email is ${this.email}  `;
    },
  },
];
console.log(users_data[0].fullInfo());

const firstname = "zeko";
const lastname = "zavradashvili";
const age = "15";

// const users = [
//   {
//     id: 1,
//     firstname: firstname,
//     lastname: lastname,
//     age: age,
//     location: "tbilisi",
//     fullInfo: function mergeinfo(user) {
//         return `${user.id} ${user.firstname} ${user.age} ${user.lastname} ${user.location}`
//       }
//   }
// ];

// console.log(mergeinfo(users[0]));

// const myData = [
//   {
//     id: 1,
//     username: "lika",
//     lastname: "sharmanshvili",
//     age: 23,
//     profession: "web development",
//     currentJob: "none",

//     Info: function info() {
//       return `${this.id} ${this.username} ${this.lastname} ${this.age} ${this.profession} ${this.currentJob} `;
//     },
//   },
// ];
// console.log(myData[0].Info());

// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// username.addEventListener("input", (e) => {
//   const usernameRegex = /^[a-zA-Z0-9._]{3,15}$/;
//   const currentValue = e.target.value;
//   const isValid = usernameRegex.test(currentValue);

//   if (!isValid) {
//     document.getElementById("username_error").style.display = "block";
//   } else {
//     document.getElementById("username_error").style.display = "none";
//   }
// });

// email.addEventListener("input", (e) => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const currentValue = e.target.value;
//   const isValid = emailRegex.test(currentValue);

//   if (!isValid) {
//     document.getElementById("email_error").style.display = "block";
//   } else {
//     document.getElementById("email_error").style.display = "none";
//   }
// });

// password.addEventListener("input", (e) => {
//   const passwordRegex =
//     /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

//   const currentValue = e.target.value;
//   const isValid = passwordRegex.test(currentValue);

//   if (!isValid) {
//     document.getElementById("password_error").style.display = "block";
//   } else {
//     document.getElementById("password_error").style.display = "none";
//   }
// });

const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.disabled = true;

function validateForm(event) {
  event.preventDefault();
  const usernameRegex = /^[a-zA-Z0-9._]{3,15}$/;
  const passwordRegex =
    /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const isValidUserName = usernameRegex.test(username.value);
  const isValidPassword = passwordRegex.test(password.value);

  document.getElementById("username_error").style.display = isValidUserName
    ? "none"
    : "block";
  document.getElementById("password_error").style.display = isValidPassword
    ? "none"
    : "block";

  submit.disabled = !(isValidUserName && isValidPassword);
}

username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);