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

