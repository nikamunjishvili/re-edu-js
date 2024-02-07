// console.log("Hello");

// const third = (name) => {
//   console.log(name);
// };

// const second = () => {
//   third("Third");
// };

// const first = () => {
//   setTimeout(() => {
//     console.log("I am the first async code!");
//   },100);
//   second();
//   setTimeout(() => {
//     console.log("I am the second async code!");
//   }, 500);
// };

// first();

// const apiFetcher = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { name: "Nick" } });
//     }, 3000);
//   });
// };

// apiFetcher().then(console.log);

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     key: 'value',
//   }),
// })
// .then(response => response.json())
// .then(data => console.log('Success:', data))
// .catch(error => console.error('Error:', error));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-type": "Application/json",
//   },
//   body: JSON.stringify({
//     hello: "HI!",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const fetchData = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts");
// };

// fetchData()
//   .then((response) => response.json())
//   .then((data) => {
//    data.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item.title;
//     document.body.appendChild(li);
//    })
//   })
//   .catch(err => {
//     alert(err);
//   })

// document.querySelectorAll("button").forEach((element) => {
//   element.addEventListener("click", () => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${element.textContent}`)
//       .then((res) => res.json())
//       .then((data) => {
//        let display = document.querySelector('#post-display');
//        if(!display){
//         display = document.createElement("p");
//         display.id = "post-display";
//         document.body.appendChild(display);
//        }
//         display.textContent = `Post ${data.id} Body: ${data.body}`;
//       });
//   });
// });

console.log("Hello");

const second = () => {
  console.log("Second Function!!");
};

const first = () => {
  console.log("First Function");
  second();
  console.log("The end!");
};

first();

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error");
//       resolve({ data: { name: "Nika" } });
//     }, 2000);
//   });
// };

// fetchData()
//   .then(console.log)
//   .catch((err) => console.log(err));
