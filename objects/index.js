//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related 
// data and functions together. In JavaScript, an object is a collection of key-value pairs,
//  where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* ==============================
//*1. Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

// const product = {
//   id: 1,
//   pName: "laptop",
// };
// let person = {
//   name: "Vinod",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to World Best CSS Course");
//   },
// };

let person = {
  name: "Vinod",
  age: 30,
  "is'Student": false,
  greet: function () {
    console.log("Welcome to World Best JavaScript Course");
  },
};

//* ==============================
//* 2.Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person.name);
// console.log(person['is\'Student']);

// console.log(person[`is'Student`]);

//* =================================
//* 3.Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
// person["job"] = "web dev";
// // person.age = 18;
// person["age"] = 20;

// console.log(person);

//* =================================
//* 4.Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

// person.greet();

//* ========================================
//* 5.We can add dynamic keys in an object
//* ========================================

// let idType = "studentId";

// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

