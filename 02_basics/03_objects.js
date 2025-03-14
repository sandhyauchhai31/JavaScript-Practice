
// objects singletone
// objects literals

const mySym = Symbol("key1");
const jsUser = {
  name: "Sandhya",
  fullname: "Sandhya Uchhai",
  age: "23",
  [mySym]: "mykey1",
  location: "Sangli",
  email: "sandhya@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["fullname"]);
console.log(typeof jsUser[mySym]);

jsUser.name = "Janhavi";
console.log(jsUser);

// Object.freeze(jsUser); //it will lock the object no body can make changes
jsUser.email = "janhavi@123";
jsUser.greeting = function () {
  console.log(`Hello Js users live in  ${this.location}`);
};

console.log(jsUser.greeting());

