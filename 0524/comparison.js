//Comparisons
// will always equate to a boolean (true/false)

// EQUALS: ===  OR ==
// DOES NOT EQUAL: !==
// GREATER THAN:  >
// LESS THAN: <
// GREATER THAN OR EQUAL: >=
// LESS THAN OR EQUAL: <=



// EQUALS: compares each value and returns true if the values are the same 

let num1 = 100
let num2 = '100'

// === will compare the value of the variables INCLUDING their type
let equals1 = (num1===num2) // -> false, because num1 is an integer and num2 is a string

let num3 = 100
let equals2 = (num1===num3) // -> true, because both num1 and num2 are ints of value 100

// == compares just the values of the variables NOT INCLUDING their type

let equals3 = (num1==num2) // -> true, because both num1 and num2 have a value of 100 despite being different types


// DOES NOT EQUAL: compares each value and will return true if the values are not the same 

let num4 = 101

let equals4 = (num1!==num4) // -> true, because num1 does not have the same value as num4 


// GREATER THAN: compares each value and returns true if the the first value is larger than the second

let greaterThan = (num4>num1) //-> true

// GREATER THAN OR EQUAL TO: compares each value and returns true if the the first value is larger than the second
let greaterThanOrEqual = (num4>=num1) //-> true

// LESS THAN: compares each value and returns true if the the first value is smaller than the second

let lessThan = (num1<num4) //-> true

// LESS THAN OR EQUAL TO: compares each value and returns true if the the first value is smaller than or equal the second
let lessThanOrEqual = (num1<=num4) //-> true

// IF/ELSE IF/ ELSE -> 
// if (condition) {logic} -> the logic will only run if the condition is true
// there is no connection between the logic and the condition besides the logic only running if the condition is true

if (num1 === num2){
    console.log('1')
} else if (num1 == num2){
    console.log('2')
} else if (num1 >= num2){
    console.log('3')
} else if (num1 <= num2){
    console.log('4')
} else {
    console.log('5')
}

// everything you put into the condition in the if else statements, it will attempt to turn into booleans

// all variables that have specified values return true

let stringVar = 'Hello World!' //--> true
let intVar = 1 //--> true
let floatVar = 0.95 //--> true
let booleanVar = true   //--> true
let arrayVar = [1,2,3,4,5] //--> true
let objVar = {
    'breakfast': 'Pancakes',
    'lunch': 'Hamburger',
    'dinner': 'Soup'
} //--> true

// null or undefined variables return false

let nullVar = null //--> false
let undefinedVar = undefined //--> false


if (stringVar){
    console.log('String Var is true')
} else if (nullVar){
    console.log('Null Var is false')
}



// TERNARY OPERATORS
// a shortened form of writing if else statements
// only use if you have just two conditions to check for (true or false)
// (condition) ? logic if true : logic if false

let numX;
... (1 line left)