

function addTwonumbers(number1 , number2){
    // let result = number1 + number2 
    // console.log("sandhya");
    
    return number1 + number2
    
}
let result = addTwonumbers(3,6,9)
// console.log(result);
// console.log(3,6);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return;
    }
    
        return `${username} just logged in.`
    

}
// console.log(loginUserMessage("sandhya"));
console.log(loginUserMessage("Sandhya"));

// REST operator

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(233,555,66,90));

const user = {
    username : "sandhya",
    price : 199
}
function handleObject(anyObjet){
    console.log(`Username is ${anyObjet.username} and price is ${anyObjet.price}`);
    
}
// handleObject(user)
handleObject({
    username : "Jan",
    price :200
})

// const myNewArray = [200,300,400];
function returnSecondValue(getArray){
    return getArray[1];

}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([2,5,6,7,9]));



