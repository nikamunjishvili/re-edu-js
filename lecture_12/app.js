// const products = [
//   {
//     id: 1,
//     title: "Product A",
//     price: 9.99,
//     category: "Clothing",
//   },
//   {
//     id: 2,
//     title: "Product B",
//     price: 19.99,
//     category: "Books",
//   },
//   {
//     id: 3,
//     title: "Product C",
//     price: 29.99,
//     category: "Clothing",
//   },
//   {
//     id: 4,
//     title: "Product C",
//     price: 29.99,
//     category: "Books",
//   },
// ];

// const button = document.getElementById("button")
// const input = document.getElementById("input")

// button.addEventListener('click', () => {
//     localStorage.setItem('todos', JSON.stringify(input.value))

//     const result = localStorage.removeItem("todos");

//     console.log(result);

// })

// function newUpdateArray(producta_data) {
//   return producta_data.map((product) => {
//     return { ...product, isCart: false };
//   });
// }

// console.log(newUpdateArray(products));

// const users = ["nick", "Nugo", "David", "Saba"];

// const result = users.filter(item => item !== "Saba");
// const result2 = users.filter(item => item !== "Nugo");
// console.log(result);
// console.log(result2);

// const booksCategory = products.filter(
//   (product) => product.category === "Books"
// );
// const clothingCategory = products.filter(
//   (product) => product.category === "Clothing"
// );

// console.log(booksCategory);
// console.log(clothingCategory);

// const newProductsObj = {
//   book: booksCategory,
//   clothing: clothingCategory,
// };

// for (const product in newProductsObj) {
//   const app = document.getElementById("app");
//   const ul = document.createElement("ul");
//   app.appendChild(ul);
//   ul.textContent = product.toUpperCase();

//   newProductsObj[product].forEach((product_item) => {
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     li.textContent = `${product_item.title} - ${product_item.price}`;
//   });
// }

// const user = ["nika", 'luka', 'saba'];

// const results = user.find(item => {
//     if(item === "luka"){
//         return item;
//     }else{
//         return item;
//     }
// });

// console.log(results);

// const user = ["nika", 'luka', 'saba'];

// const result = user.some(item => item === id);
// console.log(result);

// if(result){
//     alert('User is found');
// }else{
//     alert('User not found');
// }

// function updateCategory(productId, new_category) {
//   return products.map((prod) => {
//     if (prod.id === productId) {
//       return {
//         ...prod,
//         category: new_category,
//       };
//     } else {
//       return prod;
//     }
//   });
// }

// console.log(updateCategory(4, "Electronics"));

// const productss = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Sportswear" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const numbers = [23,5,3,66,776,8,86,323,4444,53];

// const result = productss.reduce((sum, pricess) => {
//     return sum + pricess.price;
// }, 0)

// console.log(result);

// const students = [
//   { name: "Nugo", age: 24, sallary: 100 },
//   { name: "Aleqsandre", age: 23, sallary: 43 },
//   { name: "Guja", age: 20, sallary: 1.5 },
//   { name: "nick", age: 16, sallary: 2.3 },
//   { name: "Mariam", age: 22, sallary: 0 },
//   { name: "Zezva", age: 15, sallary: 0 },
// ];

// const result = students.reduce(
//   (res, item) => {
//     if (item.sallary === 0) {
//       res.unnempoed++;
//     }
//     if (item.age >= 18) {
//       res.adult++;
//     } else {
//       res.teen++;
//     }
//     return res;
//   },
//   {
//     teen: 0,
//     adult: 0,
//     unnempoed: 0,
//   }
// );

// console.log(result);

const products = [
  {
    id: 1,
    title: "Product A",
    price: 9.99,
    category: "Clothing",
  },
  {
    id: 2,
    title: "Product B",
    price: 19.99,
    category: "Books",
  },
  {
    id: 3,
    title: "Product C",
    price: 29.99,
    category: "Clothing",
  },
  {
    id: 4,
    title: "Product C",
    price: 29.99,
    category: "Books",
  },
];

// function myData(products_data) {
//   return products_data.map((items) => {
//     const { title, price, category } = items;

//     if (category === "Books") {
//       return ` ${title} ${price} ${category}`;
//     }
//   });
// }

// console.log(myData(products));

// function myName(num, num2, num3, num4, num5, num6) {

// }

// console.log(myName(1,2,3,...caria))

const check = document.getElementById("check");
const heading = document.getElementById("heading");

check.addEventListener("click", () => {
  if (check.checked) {
    heading.style.textDecoration = "line-through";
    heading.style.color = "gray";
    heading.style.fontSize = "13px";
  } else {
    heading.style.textDecoration = "none";
    heading.style.color = "black";
    heading.style.fontSize = "25px";
  }
});


