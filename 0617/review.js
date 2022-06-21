// 0. Why do we get two different results from the following two lines?

1 == '1' // -> returns true // checks to see if they have the same value, and ignores their type, actually forces them to be the same type
1 === '1' // -> returns false //checks to see if they have the same value and the same type

1 === 3 // -> returns false

6 == '6' // true
'10' === '10' // true


// 1. Console log the 5th item of the following array:

let arr1 = ['earth','mars','jupiter','neptune','saturn','venus','mercury','uranus']
// Write your code below:

//console.log(arr1[4])

//console.log(arr1[arr1.length - 1]) // finding the last element in an array


// 2. Use slice to console.log 'apple' from the following string:

let string1 = 'pineapple'

// Write your code below:
//console.log(string1.slice(4,)) // starts from the index that I want

//console.log(string1.split('').reverse().join(''))


// Use splice to console.log 'apple' from the string1 variable:

//string1 // = 'pineapple'

// Write your code below:
//console.log(string1.split('').splice(4, ).join(''))


// 3. Console log the index of the element in the following array that has a length greater than 5:

let arr2 = ['car','bar','tar','here it is','bat','rat','cat']

// Write your code below:
//console.log(arr2.findIndex(word => word.length>5)) 
// find, finds the value and findIndex finds the index


// 4. Use the following array to console log an array containing only numbers divisible by 7:

let arr3 =  [7,8,11,21,49,55,56,742,442,2415,111,3214,342,23,714]

//divisible numbers dont have reminders
//how can I find reminders in javaScript?
//num % 7 === 0 // if the num is divisible by 7 it means that the reminder will be === 0


// Write your code below:
//console.log(arr3.filter( num => { return num % 7 === 0}))


// 5. Use the following array to console log an array containing the same strings shortend by one character:

let arr4 = ['trees','bees','honey','flowers','pollen','beehives']

// Write your code below:
// console.log(arr4.map(word => word.slice(1, ))) //first one
//console.log(arr4.map(word => word.slice(0, word.length -1 ))) //last one

//let word = 'allosaurus'

//console.log(word.slice(0, word.length -1))



// 6. Use the following array to console log the total of the following array:

let arr5 = [1,2,3,4,5,6,7,8,9]

// Write your code below:
// .reduce() -> executes an operation on each array element and then returns a single value: the accumulation 
//let reduceArray = baseArray.reduce((tot,val)=>tot+val,0)


//console.log(arr5.reduce((total, value)=> { return total + value}, 0))
//every value it add to the total
//total and value are the parameters in this anonimous function
//


// slice vs splice
let word1 = 'pineapple'.split('')
// console.log(word1.slice(4,).join(''))
// console.log(word1.join(''))
// console.log(word1.splice(4,).join(''))
// console.log(word1.join(''))


// console logging all keys
let fruits = {
    "pineapple":'favorite',
    "avocado":"apparently a fruit",
    "tomato":"veg or fruit? maybe both"
}

// for(let fruit in fruits){
//     console.log(fruit)
// }


// Remove all of the white space in the following string and console log the result:

let breakfast = '                 bacon and eggs                 '
// Write your code below:
//console.log(breakfast.trim())



// Return the largest number from the following array:

let arr6 =  [7,8,11,21,49,55,56,742,442,2415,111,3214,342,23,714]

let largestnum = 0

arr6.forEach(num => {if (largestnum < num) {largestnum = num}} )

console.log(largestnum)
//map returns an array, and i dont need to return an array.
//I want to return just one integer after the entire loop has finished. 
//that is why I used forEach

console.log(Math.max(...arr6))
// ...arr6