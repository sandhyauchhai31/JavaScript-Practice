// objects singletone

let tinder = new Object({name : "sandha"})
let tinderUser = {
    name: "sandya",
    fullname : {
        firstname : "sandhyaa",
        lastname : "uchhai"
    }
}

console.log(tinderUser.fullname.firstname);


// Combine Objects

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2};

const obj3 = Object.assign({},obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4);
console.log(obj1);

const users  =[
    {
        id : 1,
        name : "sandhya"
    },
    {
        id : 2,
        name : "janhavi"
    },
    {
        id : 3,
        name : "milind"
    }
]
// console.log(users[1].name);
// console.log(Object.keys(tinderUser)); //you can acces keys of object
// console.log(Object.values(tinderUser)); //you can acces values of object
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('fullname')); // this checks property is present or not


//  Object destructuring

const course = {
    coursename : "Js in Hindi",
    price : 999,
    courseIstructure : "sandhya"
}

// console.log(course.courseIstructure);
// console.log(course.price);

const {price,courseIstructure : instructure } = course;  //we can also change name of keys

console.log(price, instructure);
