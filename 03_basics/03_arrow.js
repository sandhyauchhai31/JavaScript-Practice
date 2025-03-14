const user = {
    username : "sandhya",
    price : 199,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "janhavi";
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "sandhya"
//     console.log(this.username);
    
// }
// chai()

// const chai =  () => {
//     let username = "sandhya"
//     console.log(this.username);
    
// }
// console.log(chai());


// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }
// const addtwo = (num1,num2) =>  num1 + num2;
const addtwo = (num1,num2) =>  ({username : "sandhya"})


// console.log(addtwo(2,4));

(function(){
    console.log("IIFE executed");
    
})();
// (function() {
//     console.log("IIFE executed!");
// })(); 
// (function(){
//     console.log("hello");
    
// })();
(function(){
    //named IIFE
    console.log("hiiii");
    
})();  //without ";"it won't run
((name) => {
    console.log(`hello ${name}`)
})("sandhyaaaa");
