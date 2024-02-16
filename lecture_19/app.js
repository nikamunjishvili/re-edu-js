// const obj = [
//   {
//     id: 1,
//     name: "nika",
//     lastname: "munjishvili",
//     sayFullName: function(){
//         return `${this.name} ${this.lastname}`
//     }
//   },
// ];

// console.log(obj[0].sayFullName());

// function User(name, lastname){
//     this.name = name;
//     this.lastname = lastname;
//     this.sayFullName = function(){
//         const sayName =  this.name + this.lastname;
//         return sayName;
//     }
// }

// const user_obj = new User("Nika", "Munjishvili");
// console.log(user_obj.sayFullName());

// class Book {
//   constructor(id, title, author) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//   }

//   sayFullBookInfo() {
//     return `book  with title "${this.title}" and author "${this.author}" and number is ${this.id}`;
//   }
// }

// class NewBook extends Book{}

// const new_book = new NewBook(1, 'dsdsdsd', 'drfvcvcvcvcvcf');

// console.log(new_book.sayFullBookInfo());

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   saySound() {
//     return this.sound;
//   }
// }

// class Wolf extends Animal {
//   saySound() {
//     return `${this.name} says ${this.sound}`;
//   }
// }

// const animalSound = new Wolf();
// animalSound.name = "Wolf";
// animalSound.sound = "Brrrr....";

// console.log(animalSound.saySound());

// function solve(callBack){
//     return callBack(10, 20)
// }

// function callBackFunction(a, b){
//     return a + b;
// }

// console.log(solve(callBackFunction))

// map(() => {})

// class Calculator {
//     constructor(initialValue = 0){
//         this.value = initialValue;
//     }

//     add(number){
//         this.value += number;
//         return this;
//     }

//     multiplay(number){
//         this.value *= number;
//         return this;
//     }

//     getValue(){
//         return this.value;
//     }
// }

// const calc = new Calculator(2);
// console.log(calc.add(2).multiplay(2).getValue());

// class Calculator {
//     constructor(initialValue = 0){
//         this.value = initialValue;
//     }

//     add(number){
//         this.value += number;
//         return this;
//     }

//     multiplay(number){
//         this.value *= number;
//         return this;
//     }
//     minus(number){
//         this.value -= number;
//         return this;

//     }
//     divided(number){
//         this.value /= number;
//         return this

//     }

//     getValue(){
//         return this.value;
//     }
// }

// const calc = new Calculator(2);
// console.log(calc.add(2).multiplay(2).minus(2).divided(2).getValue());

// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// function objectKey(obj) {
//   let result = [];
//   for (let key in obj) {
//     result.push(key);
//   }
//   return result;
// }

// console.log(objectKey(obj));

// function objectValue(obj) {
//   let result = [];
//   for (let value in obj) {
//     result.push(obj[value]);
//   }
//   return result;
// }
// console.log(objectValue(obj));

// const users = {
//   id: 1,
//   name: "nika",
//   email: "nika@gmail.com",
//   password: "nika123456",
// };

// const { password, ...rest } = users;

// console.log(rest);

// const body = {
//   id: 1,
//   name: "nika",
//   email: "nika@gmail.com",
//   password: "nika123456",
// };

// const { name, email, password } = body;


// const numbers = [1,2,3,4,5];

// const [num1, ...nums] = numbers;

// console.log(nums);


const products_data = [
    {
        id: 1,
        title: "Product_1",
        price: 20.00,
        category: "tech"
    },
    {
        id: 2,
        title: "Product_2",
        price: 40.00,
        category: "book"
    },
    {
        id: 3,
        title: "Product_3",
        price: 40.00,
        category: "tech"
    },
    {
        id: 4,
        title: "Product_4",
        price: 40.00,
        category: "book"
    }
];

const filteredTech = products_data.filter(product => product.category === "tech");
const filteredBook = products_data.filter(product => product.category === "book");

const newObj = {
    tech: filteredTech,
    book: filteredBook
}

for(const product in newObj){
    console.log(product);
}

// const result = products_data.reduce((num, product) => {
//    if(product.category === 'tech'){
   
//    }
// }, 0);

// console.log(result);