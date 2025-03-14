const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 123.456474;
console.log(otherNum.toPrecision(4));

const hundrends = 1000000;
console.log(hundrends.toLocaleString('en-IN'))
console.log(hundrends.toLocaleString('de-DE'))



console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE * 2)



// function processTransaction(amount) {
//     if (amount > Number.MAX_VALUE) {
//         return "Error: Amount exceeds system limit!";
//     }
//     return `Transaction of $${amount} processed successfully.`;
// }

// console.log(processTransaction(1.8e+308)); // "Error: Amount exceeds system limit!"
// console.log(processTransaction(1000000));  // "Transaction of $1000000 processed successfully."


function transcation(amount){
    if (amount > Number.MAX_VALUE) {
        return "Error : Amount exceeds system limits"
        
    }
    return `Transcation of ${amount} processed successulll!!!!!`
}
console.log(transcation(1.8e+308));
// console.log(transcation(2));

console.log( Math.max(4,3,4,5,6));
console.log( Math.min(4,3,4,5,6));
console.log(Math.random());
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)+ min))






