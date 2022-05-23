// SORT
// art.sort() -> by default sorts an array alphabetically and returns it
// changes the original array (DESTRUCTIVE)


let animals = ['dragonfly', 'bat', 'flamingo', 'aligator', 'crocodile', 'eagle']
console.log('ORIGINAL ARRAY: ', animals)
animals.sort()
console.log('SORTED ARRAY: ', animals)


// By default, arrays of numbers are sorted by their first character
// Therefore not by their actual value
// EX: 11 will be sorted before 2 

console.log()
console.log()

let nums = [1, 2, 3, 4, 5, 11, 22, 33, 44, 55]
console.log('ORIGINAL ARRAY: ', nums)
nums.sort()
console.log('SORTED ARRAY: ', nums)


// You solve this by providing a specific comparison for the sort function to use as a basis
// arr.sort((element1,element2)=>{~})

let nums2 = [ 1, 11, 2, 22, 3, 33, 4, 44, 5, 55 ]
console.log('ORIGINAL ARRAY: ', nums2)
nums2.sort((num1,num2)=>num1-num2) // This will sort the numbers from smallest to largest
console.log('SORTED ARRAY: ', nums2)