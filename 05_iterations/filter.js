const coding = ["JS","CPP","Python","JAVA","Ruby"]

//forEach doesn't return any value, can't perform any coditional operation
const values = coding.forEach((item)=>{
    // console.log(item);
    // return item
})

// console.log(values); // output => undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let nums = myNums.filter((i)=> (i>4))
let nums = myNums.filter((i)=> {
    return i>4
})
// console.log(nums);

//same filter logic in forEach
// const newNums = [];
// myNums.forEach( (num) =>{
//     if (num>4) {
//         newNums.push(num)        
//     }
// } )
// console.log(newNums);

const books = [
    {
        title : 'Book One', genre : 'Fiction', publish : 1981, edition : 2004
    },
    {
        title : 'Book Two', genre : 'History', publish : 1981, edition : 2008
    },
    {
        title : 'Book Three', genre : 'Non-Fiction', publish : 1992, edition : 2007
    },
    {
        title : 'Book Four', genre : 'Science', publish : 1999, edition : 2014
    },
    {
        title : 'Book Five', genre : 'Non-Fiction', publish : 2000, edition : 2010
    },
    {
        title : 'Book Six', genre : 'Fiction', publish : 1999, edition : 2014
    },
    {
        title : 'Book Seven', genre : 'History', publish : 1994, edition : 2007
    },
    {
        title : 'Book Eight', genre : 'Non-Fiction', publish : 1992, edition : 2005
    },
    {
        title : 'Book Nine', genre : 'Science', publish : 2022, edition : 2022
    },
    {
        title : 'Book Ten', genre : 'Non-Fiction', publish : 2001, edition : 2025
    },
];

let userBooks = books.filter((bk) =>(bk.genre == 'History'))

userBooks = books.filter((bk) => (bk.publish >= 2000 && bk.genre == 'Science'))
console.log(userBooks);


