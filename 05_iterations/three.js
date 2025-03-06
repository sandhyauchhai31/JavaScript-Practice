// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
    
// }

// const greetings = "Hello World!"
// for(let i of greetings){
//     console.log(`Each char of ${i}`);
    
// }

const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States of America")
map.set('Fr',"France")
map.set('IN' , "India")

// console.log(map);
// // console.log(typeof map);
for (const [key, value] of map) {
    console.log(key, ":", value)
}

// const myOject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for (const [key, value] of myOject) {
//     console.log(`${key} : ${value}`);
    
    
// }

