// let text = "Vinod Thapa";
// console.log(text.indexOf("thapa"));
// // The indexOf() method is case sensitive.
// console.log(text.indexOf("Thapa"));

//.........................................................
//text "Vinod Thapa" converted into the string array
// let strArr = Array.from(text);
// console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//............................................................................

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i);
// console.log(result);

//....................................................
//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i); // This will ignone the case sensativity by putting i 
// console.log(result);

//.............................................................

//? match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// let result = text.match("JavaScript");
//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi);