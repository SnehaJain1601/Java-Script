//* =========================================
//* Date & Time Objects in JavaScript
//* =========================================

//? Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in several ways:
//todo There are 9 ways to create a new date object:

// Syntax
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

//? Current date and time
//? new Date(): Creates a Date object representing the current date and time.
//.............................Code 1.....................
// const currentDate = new Date();
// console.log(currentDate);
//..................................................

//todo  This is the ISO 8601 format, which is a standard for representing dates and times. In this format, the date and time are represented together, separated by the letter "T". The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.
//.......................................................................
//? 2: new Date(dateString): Creates a Date object based on the provided date string.
// const dateString = "2026-02-23T20:09:29.550Z";
// const dateFromString = new Date(dateString);
// console.log(dateFromString);
//.......................................................................

//? 3: new Date(year, month): Creates a Date object with the specified year and month.
// const date1 = new Date(2025, 12);
// console.log(date1);

//? 4: new Date(year, month, day): Creates a Date object with the specified year, month, and day.
// const date2 = new Date(2024, 1, 19); //1 treated as feb that is 02
// console.log(date2);

//? 5: new Date(year, month, day, hours): Creates a Date object with the specified year, month, day, and hours.
// const date3 = new Date(2024, 1, 19, 10);
// console.log(date3);

//? 6: new Date(year, month, day, hours, minutes): Creates a Date object with the specified year, month, day, hours, and minutes.
// const date4 = new Date(2024, 1, 19, 10, 44);
// console.log(date4);

//? 7: new Date(year, month, day, hours, minutes, seconds): Creates a Date object with the specified year, month, day, hours, minutes, and seconds.
// const date5 = new Date(2024, 1, 19, 10, 44, 9);
// console.log(date5);

//? 8: new Date(year, month, day, hours, minutes, seconds, ms): Creates a Date object with the specified year, month, day, hours, minutes, seconds, and milliseconds.
// const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
// console.log(date6);

//? 9: new Date(milliseconds): Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
// const curMilliSeconds = new Date().getTime();
// // const milliseconds = 1632090690883; // Example milliseconds
// const dateFromMilliseconds = new Date(curMilliSeconds);
// console.log(dateFromMilliseconds);

// ..............................................................................
//todo Note:
//? 1: JavaScript counts months from 0 to 11:
// ?January = 0, December = 11

//? 2: JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of milliseconds since January 01, 1970.

//* Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
//? new Date(date string) creates a date object from a date string
//.............................................................
// const date1 = new Date("2024-01-05"); // Year-Month-Day
// const date2 = new Date("January 5, 2024"); // Month Day, Year
// console.log(date1);
// console.log(date2);
// OUTPUT
// Fri Jan 05 2024 05:30:00 GMT+0530 (India Standard Time)
// Fri Jan 05 2024 00:00:00 GMT+0530 (India Standard Time)

//* ==================================================
//* JavaScript Get Date Methods / Getting Components:
//* ===================================================
// ......................................................................................
// You can get various components of a date using the methods of the Date object:
const currentDate = new Date();
// //? In a date object, the time is static.
// const year = currentDate.getFullYear();
// console.log(currentDate);
// OUTPUT
// 2026-03-04T15:57:46.713Z

// const month = currentDate.getMonth(); // 0-based index
// console.log(month); //2

// const date = currentDate.getDate();
// console.log(date); //4

// const day = currentDate.getDay();
// console.log(day); //3 Sunday as 0 index

//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================
// ......................................................................................
const date = new Date();
// console.log(date);

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.
// date.setFullYear(2025);
// console.log(date); // Date object with the year set to 2025

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date according to local time.
// date.setMonth(5); // June (months are zero-based)
// console.log(date); // Date object with the month set to June

//? setDate(dayValue): Sets the day of the month for a specified date according to local time.
// date.setDate(15);
// console.log(date); // Date object with the day of the month set to 15
// ......................................................................................
