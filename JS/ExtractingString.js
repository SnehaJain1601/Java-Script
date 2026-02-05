//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);

// subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);
