//Dates

let myDate = new Date();
//  console.log(myDate.toString());

//  console.log(myDate.toString());
// console.log(myDate.toDateString());
//   console.log(myDate.toLocaleString());
//  console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
// console.log(myDate.getHours());
// console.log(myDate.getMonth());
// console.log(typeof myDate);
// console.log(myDate.getMinutes());

// let mCreatedDate = new Date(2023,5,23, 5,3);
// let mCreatedDate = new Date("2023-05-14");
let mCreatedDate = new Date("12-04-2024");
// console.log(mCreatedDate.toDateString())
// console.log(mCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
console.log(newDate.toLocaleString('default', {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric",
    
}));



