const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"
}
for (const key in myObject) {
    // console.log(key, ":");
    console.log(`${key} Shortcut is for ${myObject[key]}`);
    
    
}