// Types

let stringVar = 'Hello World!'
let intVar = 1
let floatVar = 0.95
let booleanVar = true  //false
let arrayVar = [1,2,3,4,5]
let objVar = {
    'breakfast': 'Pancakes',
    'lunch': 'Hamburger',
    'dinner': 'Soup'
}
let nullVar = null
let undefinedVar = undefined


// You can determine the type of a variable by using the type of command
console.log('STRING: ',stringVar, typeof stringVar)
console.log('INT: ',intVar, typeof intVar)
console.log('FLOAT: ', floatVar, typeof floatVar)
console.log('BOOLEAN: ',booleanVar, typeof booleanVar)
console.log('ARRAY: ', arrayVar, typeof arrayVar)
console.log('OBJECT: ',objVar, typeof objVar)
console.log('NULL: ',nullVar, typeof nullVar)
console.log('UNDEFINED: ',undefinedVar, typeof undefinedVar)



//Verifying 

// to check if the variable is an array
// returns true or false

let isArr = Array.isArray(arrayVar)
let isArr2 = Array.isArray(objVar)
console.log('IS ARRAY: ', isArr)
console.log('IS ARRAY 2: ', isArr2)

// to check if the variable is not a number
// returns true or false
let isStringNAN = isNaN(stringVar)
let isIntNAN = isNaN(intVar)
console.log('IS NAN: ', isStringNAN)
console.log('IS NAN 2: ', isIntNAN)

// USING isNan() to filter an array
let randomArray = [1,'string1',2,'string2',3.45,'string3']
let filteredArray = randomArray.filter(item=>{return !isNaN(item)})
console.log('ARRAY 1:', randomArray)
console.log('FILTERED ARRAY:', filteredArray)


// Changing Types


// String to Int
// parseInt will turn a string of numbers into an integer
// will return NAN if it is not a number
let stringNum = '121'
let newNum = parseInt(stringNum)
console.log('STRING TO INT: ', newNum, typeof newNum)
let stringArray = ['a121', '123', 'dfe']
let intArray = stringArray.map(item=>parseInt(item))
console.log('PARSE ARRAY :' ,intArray)

// Int to String

let randInt = -125
let numString = randInt.toString()

console.log('INT TO STRING: ', numString, typeof numString)


// String to Float

let floatString = '5.41'
let newFloat = parseFloat(floatString)
let falseFloat = parseInt(floatString)

console.log('STRING TO FLOAT: ', newFloat, typeof newFloat)
console.log('STRING TO FLOAT 2: ', falseFloat, typeof falseFloat)


// Float to String

let randFloat = -2.41
let floatString2 = randFloat.toString()

console.log('FLOAT TO STRING: ', floatString2, typeof floatString2)