// Strings


// REPLACE
// str.replace(x,y) -> looks for the first match of x in the str and replaces it with y
// does not change the original string (non-destructive)
// returns a new string 


let str = 'I had a sandwhich for lunch today'
let updatedString = str.replace('sandwhich','burrito')
console.log('REPLACE: ', str, updatedString)


// toUpperCase() / toLowerCase()
// do not modify the original string


let football = 'footBALL'

let upperFootball = football.toUpperCase()
let lowerFootball = football.toLowerCase()

console.log('Cases: ', football, '-', upperFootball, '-', lowerFootball )


// CONCATENATION
// str1 + str2 === str1.concat(str2)
// Do the same thing!

let action = 'I am going to the '
let location1 = 'gym'
let location2 = 'grocery'

let sentence1 = action + location1
let sentence2 = action.concat(location2)

console.log('SENTENCE 1: ', sentence1)
console.log('SENTENCE 2: ', sentence2)


// TRIM
// str.trim() removes all of the white space surrounding a string
// does not affect the original string
// does not remove any white space between characters

let breakfast = '                 bacon and eggs                 '
let trimmedBreakfast = breakfast.trim()
console.log('TRIM: ', trimmedBreakfast, '-', breakfast)


// PADDING
// str1.padStart(num,str2) 
// str1.padEnd(num, str2)
// Both will add str2 to the front or back to str1 until str1 is the length of num

let letters = 'OOOOO'
let paddedString1 = letters.padStart(10,'T')
let paddedString2 = letters.padEnd(10,'Z')
console.log('PADDING 1: ', paddedString1 )
console.log('PADDING 2: ', paddedString2 )

let paddedString3 = letters.padStart(5,'T')
let paddedString4 = letters.padEnd(5,'Z')
console.log('PADDING 3: ', paddedString3 )
console.log('PADDING 4: ', paddedString4 )