// MATH

// MAX 
// Math.max(num1,num2) -> returns the largest number between two numbers


let maxNum = Math.max(0,100)
//dentro do parenteses eu sempre tenho que colocar dois 'valores', asssim math.max vai ter com o que comparar
console.log('Max: ', maxNum)

let currentMax = 0
let nums = [1,35,53205,34,-21,3653]

for (let num of nums){
    currentMax = Math.max(currentMax,num)
}

console.log('Max In Array: ', currentMax)

// MIN
// Math.min(num1,num2) -> returns the smallest number between two numbers

let minNum = Math.min(0,100)
console.log('Min: ', minNum)



// ROUNDING
// Three ways to round a float

let float = 3.45


//ROUND 
// Math.Round(float) -> looks at the nearest decimal point and rounds accordingly
let rounded = Math.round(float)
console.log('Round: ', rounded)

// FLOOR
// Math.floor(float) -> ignores any decimals and rounds down
let floor = Math.floor(float)
console.log('Floor: ', floor)

// CEILING
// Math.ceil(float) -> ignores any decimals and rounds up
let ceiling = Math.ceil(float)
console.log('Ceiling: ', ceiling)


// RANDOM NUMBERS
// Math.random() -> returns a number between 0-1 with decimals

let randNum = Math.random()
console.log('RANDOM 1:', randNum)

// Combine with rounding to get random whole numbers

// Multiply by ten to get a random number from 0 - 9
let randInt = Math.round(Math.random()*10)
console.log('RANDOM 2: ', randInt)

// add 1 to make the random number be in a range from 1-10

let randInt2 = Math.round(Math.random()*10)+1
console.log('RANDOM 3: ', randInt2)


// Use Math.random with the length of an array to find a random index from the array

let fruits = ['apple', 'banana','pineapple','blueberry','strawberry','watermelon','pear']
let randIndex = Math.round(Math.random()*fruits.length)
let randFruit = fruits[randIndex]

console.log("RANDOM INDEX: ", randIndex)
console.log("RANDOM FRUIT: ", randFruit)

// POWER
// Math.pow(num1,num2) -> returns num1 to the power of num2

let power = Math.pow(2,3)
console.log('POWER: ', power)

// you can also do num1 ** num2 to get the same result 
let power2 = 2 ** 3
console.log('POWER 2: ', power2)

// SQUARE ROOT
// Math.sqrt(num) -> returns the square root of a number

let square = Math.sqrt(16)
console.log("SQUARE ROOT: ", square)

// ABSOLUTE VALUE
// Math.abs(num) -> returns the absolute value of a number 
// ignores the sign of a number and returns the pure value

let absolute = Math.abs(-121)
console.log('ABSOLUTE VALUE: ', absolute)

let absolute2 = Math.abs(202)
console.log('ABSOLUTE VALUE 2: ', absolute2)


// SIGN
// Math.sign(num) -> determines if a number is positive or negative
// returns 1 if positive
// returns -1 if negative

let pos = Math.sign(100)
console.log('SIGN: ', pos)

let neg = Math.sign(-100)
console.log('SIGN 2: ', neg)

let randomNumber =  Math.round(Math.random()*-1000)
let sign = Math.sign(randomNumber)
let updatedNumber = Number(Math.abs(randomNumber).toString().split('').reverse().join(''))
updatedNumber = sign * updatedNumber

let wrongNumber = Number(randomNumber.toString().split('').reverse().join(''))
console.log('Original Number: ', randomNumber)
console.log('Reversed Number: ', updatedNumber)
console.log('Wrong Number: ', wrongNumber)
