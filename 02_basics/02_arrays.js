const marval_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros);

// const newArr = marval_heros.concat(dc_heros)
const all_new_heros = [...marval_heros, ...dc_heros]   // spread operator (combine two arrays)
// console.log(all_new_heros);



let nums = [1,2,3]
let num2 = [1,3,3]
function sum(...numbers){
    return numbers.reduce((acc,num) => acc + num, 0);
}
// console.log(sum(...nums, ...num2));


// console.log(Array.isArray("sandhya"));  //it will check it is arra or not
// console.log(Array.from("sandhya")); // convert into an array
// console.log(Array.from({name :"sandhya"})); // it give you empty array

let longArray = [1,3,4,[4,6,6],[5,7,9,[5,6,7]]];
// console.log(longArray.flat(Infinity));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));







