

// Both .filter() and .map() are array methods that iterate over arrays, but they serve different purposes.

// Feature	.filter()	.map()
// Purpose : 	Filters elements based on a condition |	Transforms each element
// Return Type :	A subset of the original array |	A new array with modified elements
// Changes Array Length? :	✅ Yes (can be smaller) | ❌ No (same length as original)
// Returns :	Only elements that pass the condition |	Every element after transformation
// Use Case :	Select specific items from an array | Modify each item in an array

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNumbers
                .map((num)=> num * 10)
                .map((num) =>num + 1)
                .filter((num) => num >= 40)
console.log(newNums);

