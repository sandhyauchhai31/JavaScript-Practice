const userEmail = [3,4];

if(NaN){
    console.log("Got your email.");
    
}else{
    console.log("Don't have correct email");
    
}

//falsy

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0",'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
    
// }else console.log(userEmail);


const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty.");
    
}

// <, >, <=, >=, ==, !=, ===, !== 


// Nullish Coalescing operator(??) : null undefined
// why we need this operaor? 
// what happen many times is that ou will call query from the database or especially some firebase..etc., you don't get directly response, you will get two values, so chances that you may get a null response or may be that the response doesnot come at all and it is undefined.
// then your entire code structure may get disturbed inn that case.
// so it has specially made for such cases that you have to assign a value that if it is null, then sign null inside it so that assign any other value. for that special purpose it is made. 
let val1, val2;
val1 = null ?? 10
val2 = 20 ?? 10

// console.log(val1, val2); //it return first value. if values value is null or undefined it print second value

// terniary Operator

//condition ? true : false

const iceTeaPrice = 5;
iceTeaPrice > 10 ? console.log("hi") : console.log("Bye");
