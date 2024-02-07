// // console.log("Hello");

// // const secondFuntion = () => {
// //   console.log("Second Function!!");
// // };

// // const firstFunctions = () => {
// //   setTimeout(
// //     () => {
// //     console.log("First function!");
// //   }
// //   , 3000);

// //   secondFuntion();

// //   setTimeout(() => {
// //     console.log("The end!!");
// //   }, 4000);
// // };

// // firstFunctions();

// const firstPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           id: 1,
//           name: "nick",
//           age: 18,
//           position: "javascript guru!!",
//         },
//       });
//     }, 3000);
//   });
// };

// const secondPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("User not found!!");
//       resolve("Image 1");
//     }, 2000);
//   });
// };

// Promise.allSettled([firstPromise(), secondPromise()])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log("message", err);
//   });

// //Promise.all --> []
// // Promise.race
// // Promise.any
// // Promise.allSettled

//უნდა მქონდეს სამი Promise ფუნქციებში, რომლებშიც პირობითად ვტვირტავთ სურათებს და აქედან ერთერთი promise
// მაინ რომ reject იყოს მაინც უნდა შემეძოს Promise შესრულება და უნდა დამილოგოს ეს ატვირთული სურათები

// function firstPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("img 1");
//     }, 2000);
//   });
// }

// function secondPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Image 2");
//     }, 3000);
//   });
// }

// function thirdPromise() {
//   return new Promise((resolve, reject) => {
//       reject("Reject!!");
//   });
// }

// Promise.any([firstPromise(), secondPromise(), thirdPromise()])
//   .then((response) => {
//     console.log("Message", response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function firstPromise() {
  return new Promise((resolve, reject) => {
    resolve("img 1");
  });
}

function secondPromise() {
  return new Promise((resolve, reject) => {
    reject("Rejected");
  });
}

function thirdPromise() {
  return new Promise((resolve, reject) => {
    resolve("img 2");
  });
}

Promise.all([firstPromise(), secondPromise(), thirdPromise()])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
