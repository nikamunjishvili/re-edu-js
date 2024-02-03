// const input_task = document.getElementById("input");

// let todo_task = [];

// function setDataLocalStorage() {
//   localStorage.setItem("tasks", JSON.stringify(todo_task));
// }

// function addTask(input_value) {
//   if (todo_task && !todo_task.includes(input_value)) {
//     todo_task.push(input_value);
//     input_task.value = "";
//     setDataLocalStorage();
//   } else {
//     return;
//   }
//   renderTasks();
// }

// function renderTasks() {
//   const container = document.querySelector(".tasks");
//   container.innerHTML = "";

//   todo_task.forEach((item, index) => {
//     let taskDiv = document.createElement("div");
//     taskDiv.style.display = "flex";

//     taskDiv.innerHTML = `
//       <div style="display: flex">
//         <input type="checkbox" />
//         <li style="list-style: none">${item}</li>
//         <button class="delete" data-index="${index}">Delete</button>
//       </div>
//     `;

//     container.appendChild(taskDiv);
//   });

//   document.querySelectorAll(".delete").forEach((button) => {
//     button.addEventListener("click", function () {
//       const itemIndex = this.getAttribute("data-index");
//       todo_task.splice(itemIndex, 1);
//       setDataLocalStorage();
//       renderTasks();
//     });
//   });
// }

// function loadTasksFromLocalStorage() {
//   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   if (storedTasks) {
//     todo_task = storedTasks;
//     renderTasks();
//   }
// }

// input_task.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     const taskInput = input_task.value.trim();
//     if (taskInput === "") {
//       alert("Please enter a valid task!");
//     } else {
//         addTask(taskInput);
//     }
//   }
// });

// document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

// const numbers = [12,2,43,54,656,76,8787,56];

// function maxNumbers(num) {
//     return Math.min(...num);
// }

// console.log(maxNumbers(numbers));

const uniqueNum = new Set([]);

// uniqueNum.add("nika@gmail.com")
// uniqueNum.add("luka@gmail.com")
// uniqueNum.add("david@gmail.com")
// uniqueNum.add("luka@gmail.com");
// const result = uniqueNum.has("luka@gmail.com");

// if(result){
//     uniqueNum.add("luka@gmail.com");
//     console.log(uniqueNum);
// }else{
//     console.log(`The email luka@gmail.com already exists in the set!`)
// }
// console.log(result);

// const user = [];

// const result = user.push(
//   {
//     id: 1,
//     name: "Nikusha",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Luka",
//     age: 25,
//   }
// );

// console.log(user);

// let userId = 2;

// const deleteUser = user.filter((delete_user) => {
//   return delete_user.id !== userId;
// });

// console.log(deleteUser);
// const isLogedin = user.some((user) => user.id === userId);

// if (isLogedin) {
//   console.log(`User with ID ${userId} is logged in`);
// } else {
//   console.log(`No user with ID ${userId} is logged in`);
// }

// for (const users of user) {
//   document.body.innerHTML = users.name;
// }

// const elements = [1, 2, 5, 3, 6];
// delete elements[2];

// console.log(elements);

// const numbers = [12, 2, 43, 54, 656, 76, 8787, 56];

// // const resultss = numbers.sort((a, b) => a - b);

// // console.log(resultss);

// const resultss = numbers.reverse();

// console.log(resultss);

//1)უნდა გვქონდეს მასივი რიცხვების მაგალითად: array = [1,2,5,43,5,5,64,54];
//უნდა გავფლიტროთ და კენტები ახალ ცალკე მასივში შევინახოთ და ლუწი რიცხვები ახალ მასივში;


// let arrey = [1,2,5,43,5,5,64,54]
// let odd = []
// let even = []

// function filter() {
//     arrey.forEach((num) => {
//         if(num % 2 === 0){
//             odd.push(num)
//         }else{
//             even.push(num)
//         }
//     })

// }

// filter()
// console.log(odd)
// console.log(even)


let user = [12, 15, 82, 16, 21, 65]
let user1 = [12,32,43];

const result = user.concat(user1);
console.log(result);

// let newOddUser = []
// let newEvenUser = []

//  for (let i = 0; i < user.length; i++) {
//     if (user[i] % 2 === 0) {
//         newEvenUser.push(user[i])
//     } else {
//         newOddUser.push(user[i])
//     }
//  }

//  console.log(newOddUser)
//  console.log(newEvenUser)
const array = [1, 2, 5, 43, 55, 64, 54];
const odd = [];
const even = [];

function filternums() {
    array.forEach(function(num) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });
}

filternums(); 


console.log(odd);
console.log(even);