const coding =  ["JS","Ruby","CPP","JAVA","Python"];

// coding.forEach(function (item){
//     console.log(item);
    
// })
// coding.forEach( (item)=>{
//     console.log(item);
    
// })

function greet(val){
    console.log(val);
    
}
// coding.forEach(greet)
// coding.forEach((item, index, array)=>{
//     console.log(item, index, array);
    
// })

const myCoding = [
    {
        languageName : "JavScript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "JAVA",
        languageFileName : "java"
    },
    {
        languageName : "C#",
        languageFileName : "cs"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})