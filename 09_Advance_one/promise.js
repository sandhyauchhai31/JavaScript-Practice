//there are two parts of promises i] promises consume ii]promises create
// promises take callback function
const promiseOne = new Promise(function(resolve, reject){
    // Do an asnyc task
    // DB calls, cryptography , network call
    setTimeout(function(){
        console.log('Async task compleated');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asnc task two compleated");
        // resolve()
    },1000)
}).then(function(){
    console.log("promise consumed 2");
    
})

const promiseThree = new Promise((resolve, reject) => {
    //network se data recevice karna hei?
    setTimeout(function(){
        resolve({username : "sandhya", email : "sandhya@example.com"})

    },1000)
})

promiseThree.then(function(user){
     console.log(user);
     
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Sandhya31", password : "12345"})
        }else{
            reject('ERROR : Something went wrong')
        }


    },1000)
})

promiseFour.then((user)=> {
     
} ).catch()