//ForEach and Map 
// let fruits = new Array("apple" , "orange" , "banana");
// fruits.forEach((curEleme ,index , arr)=>{
//     console.log(`${curEleme} ${index}`);
// })

// fruits.map((curEleme ,index , arr)=>{
//     console.log(`${curEleme} ${index}`);
// })
//.......................................................................

//Difference between two forEach and Map
// const myForEachArr = fruits.forEach((curEleme ,index , arr)=>{
//     return`${curEleme} ${index}`;
// })
// console.log(myForEachArr);


// const myMapArr = fruits.map((curEleme ,index , arr)=>{
//     return`${curEleme} ${index}`;
// })
// console.log(myMapArr);

//.....................................................................
// console.log(fruits.indexOf("apple"));
// console.log(fruits.includes("apple"));
//................................................
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[3]);
// console.log(fruits["apple"]);
//................................................
//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//................................................

//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop()); //Give the element that is removed
// console.log(fruits);
//................................................

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//................................................

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);
//................................................
//* =========================================
//*  Searching in an Array
//* =========================================
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// console.log(numbers.indexOf(4));
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));
//................................................

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
//Last index work can also be done with indexOf after giving the argument from where the searching should start
// const result = numbers.indexOf(6, 5);
// console.log(result);
//................................................

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5);
// console.log(result);
//................................................
