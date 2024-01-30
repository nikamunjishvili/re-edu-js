// const heading = document.querySelectorAll(".heading");
// const inner_container = document.getElementById('inner_container');
// console.log(heading)

// heading.forEach(elements => {
//    elements.addEventListener("click", () => {
//     inner_container.textContent = elements.textContent;
//    })
// })

// const toggle_button = document.getElementById("toggle_button");

// toggle_button.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode")
// })

const array = ["nika", "luka", "saba", "david"];

// let i = 0;
// while(true){
// if(array[i] === "saba"){
//     i++;
//     break;
// }
// console.log(array[i]);
// i++;
// }

// let i = 10;

// do {
//   console.log("error");
// } while (i < 5);

// 1)
// let count = 1;

// do {
//   console.log("count:", count);
//   count++;
// } while (count <= 10);

// //2)
const arraynum = [1, 2, 3, 4, 5];
const doubleNum = [];

arraynum.forEach((sum) => {
  doubleNum.push(sum * 2);
});

// console.log(doubleNum);

// //3)

// let userInput;
// const targetValue = "exit";

// do{
//   userInput = prompt("enter valid type<exit>");
// }
// while(userInput !== targetValue)

// //4)
// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// numbers.forEach(number => {
//   sum += number;
// })

// console.log(sum);

// //5)

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
newArr.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
// console.log(evenNumbers);

// //6)
// const arrays = ["hello", "world", "javascript"];
// const capitalizedWords = [];

// arrays.forEach((word) => {
//   capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
// });

// console.log(capitalizedWords);

function myFoo() {
  for (let i = 0; i < 10000000000; i++) {}
}

// let isLogedin = false;
// if (!isLogedin) {
//   console.log("Welcome back!");
// } else {
//   console.error("You have a error!!");
// }

// myFoo();

// console.timeEnd("block");

const input = document.getElementById("input");
const button = document.getElementById("button");
const toggle_button = document.getElementById("toggle_button");

let tasks = [];
button.addEventListener("click", () => {
  tasks.push(input.value);
  localStorage.setItem('tasks', input.value);
  console.log(tasks);

  if (input.value === "") {
    alert("Please enter task!");
  } else {
    tasks.forEach(() => {
      const list = document.createElement("li");
      const ul = document.getElementById("ul");
      ul.appendChild(list);

      const getTodoItem = localStorage.getItem("tasks");
      list.innerHTML = `
        <div style="display: flex">
        <li>${getTodoItem}</li>
        <button>X</button>
        </div>
        `;
    });
  }

  input.value = "";
});

const heading = document.getElementById('heading')

heading.style.display = 'none';

toggle_button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(heading.style.display === 'none'){
        heading.style.display = 'block'
    }else{
        heading.style.display = 'none';
    }
})