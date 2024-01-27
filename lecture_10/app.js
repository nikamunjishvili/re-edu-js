// const userArray = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], 11, 12];

// console.log(userArray[0]);
// console.log(userArray[1]);
// console.log(userArray[2]);
// console.log(userArray[3]);
// console.log(userArray[4]);

// for (let i = 0; i < userArray.length; i++) {
//   // console.log(userArray[i]);
// }

// for (const elements of userArray) {
//   console.log(elements);
// }

const userArray = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, [11, [12]]], 13, 14];
//result --> [1,2,3,4,5,6,7,8,9,10,11,12];

function recursiveFoo(elements_data) {
  let result = [];
  for (const elements of elements_data) {
    if (Array.isArray(elements)) {
      result = result.concat(recursiveFoo(elements));
    } else {
      result.push(elements);
    }
  }
  return result;
}
// console.log(recursiveFoo(userArray));

// const newArray = [

// ];

// newArray.push("hello")
// newArray.push("dsdsdsd")
// newArray.push("dads")

// newArray.shift();
// newArray.unshift("first elements");
// console.log(newArray);

const button = document.getElementById("button");
const input = document.getElementById("input");
const content = document.querySelector(".content");

let todo_array = [];

button.addEventListener("click", () => {
  todo_array.push(input.value);

  console.log("hello", todo_array);
  todo_array.forEach((item) => {
    localStorage.setItem("todo", item);
    const getData = localStorage.getItem("todo");
    console.log(getData);
    content.innerHTML = `
    <div>
    <li>${item}</li>
    <button>X</button>
    </div>
    `;
  });``
  input.value = "";

  return todo_array;
});

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
