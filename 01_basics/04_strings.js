
const name = "Sandhya";
const age = 23
console.log(`heelo my name is ${name}, and my age is ${age}`);

const gameName = new String("   Janhavi    ");
console.log(gameName.toUpperCase());
console.log(gameName.substring(0,3));
console.log(gameName.indexOf('h'));
const newGame = gameName.substring(-1,8);
console.log(newGame)

const oldGame = gameName.slice(5,1);
console.log(oldGame)

const oneString = gameName.trimEnd();
console.log(oneString)

const url = "https://sandhya.com/sandhya%20uchhai"

// console.log(url.replace("%20",""))

// console.log(url.includes('sandhyaa'));

// let numbers = [12,34,56,678]
// console.log(numbers.includes(34,0));




// console.log(gameName.charAt(2));


// console.log(gameName.length);
// console.log(gameName[0]);

// console.log(age.length);
// console.log(name.toUpperCase());

function isCommentAllowed(comment) {
    const bannedWords = ["spam", "scam","fake"];

    return !bannedWords.some(word => comment.toLowerCase().includes(word));
}
console.log(isCommentAllowed("This is great Product"));
console.log(isCommentAllowed("This is scam"));
console.log(isCommentAllowed("SPAM is happening"));

let text = "Javascript is awesome";
let word = text.split(" ",2);

console.log(word);
const textOne= "sandhya";
console.log(textOne.bold())
console.log(textOne.blink())
const updatedText = textOne.bold();
console.log(updatedText);









