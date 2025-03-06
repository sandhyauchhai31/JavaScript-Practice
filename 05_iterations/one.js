
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
 
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         // console.log(` Inner Loop value ${j}`)
//         console.log(i + ' * ' + j + ' = ' + i*j);        
//     }    
// }

const myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

// break and continue
// If we want to break any control flow we use break
//  continue skips the partiular value and print given code
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        // break;  
        continue;      
    }
    console.log(`Value of i is ${index}`);   
}