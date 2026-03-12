//Q1.Write a JavaScript program to list the properties of a JavaScript object
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
// for(key in student){
//     // console.log(student[key]); //to print the keys
//     // console.log(student[key]); to print the values
// }

//2. Delete Property
//Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.
// var student =  { 
//   name : "David Rayy", 
//   sclass : "VI", 
//   rollno : 12  };
// console.log(student);
// delete student.rollno;
// console.log(student);



//Q3.Write a JavaScript program to get the length of a JavaScript object.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// const togetlength = (student) =>{
//   let count =0;
//  for(key in student){
//    if(student.hasOwnProperty(key)) count++;
// }
//   return count;
// }
//  const ans = togetlength(student);
// console.log(ans);

// 4. Display Reading Status
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//   var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for(var i=0;i<library.length;i++){
//   var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
// }
  
// 5. Cylinder Volume
// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
 let cylinder = {
  radius: 5,
  height: 10,
  volume: function() {
    let ans = Math.PI * this.radius * this.radius * this.height ;
    let num = ans.toFixed(4);
    console.log(num);
  }
 };
 cylinder.volume();

// 6. Bubble Sort

// Write a bubble sort algorithm in JavaScript.

// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

//  let Data = [6,4,0, 3,-2,1];
// // Expected Output : [-2, 0, 1, 3, 4, 6]
//   for(let i=0;i<Data.length ;i++){
//     for(let j=i;j<Data.length ;j++){
//       if(Data[i] >Data[j]){
//         let temp = Data[i];
//         Data[i] = Data[j];
//         Data[j] = temp;
//       }
//     }
//   }
//   for(let i=0 ;i<Data.length ;i++){
//     // console.log(Data[i] + " ");
//   }

//   console.log(Data.join(" "));

// 7. String Subsets

// Write a JavaScript program that returns a subset of a string. 
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
let string = "dog" ;
let ans = [];
let part ="";
for(let i=0;i<string.length; i++){
  part += string[i];
  ans.push(part);
}
  console.log(ans.join(" "));

