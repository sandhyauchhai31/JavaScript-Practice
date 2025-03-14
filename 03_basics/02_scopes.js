let a = 200

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inside :" ,a)
}
var c= 300

// console.log("outside",a);
// console.log(b);
// console.log(c);

// scope level :: child fucntion can access the variable of parent
one()
function one(){
    const username = "sandhya";
    function two(){
        const website = "chai aur code";
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}


const threee = function fun(){
    console.log("hello");
    
}
console.log(threee());

if(true){
    const username =  "sandy";
    if(username === "sandy"){
        const website = "youtube";
        console.log(username + website);
        

    }
    // console.log(website);
    
}
// console.log(username);
