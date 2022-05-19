//
// Strings
// Strings are actually arrays of characters
// you can index them like they were arrays

let greeting = 'Hello World!'

let letter = greeting[8]
console.log('STRING: ', letter)

// SPLIT

let str = '12345'

let splitStr = str.split('')

console.log('SPLIT: ', splitStr)

// slit turns strings into an array
// .split -> creates an array with the elements the targeted string
// seperates on the specified char without including that element

let splitStr2 = str.split('3')

console.log('SPLIT 2: ', splitStr2)

// JOIN
// .join(string) -> combines the elements of one array and links them together with the specified string
// does not affect the original array
// returns a new string

let NYarray  = ['New','York','City']
let joinArray = NYarray.join()
console.log('JOIN: ',joinArray)


let breakfastArray = ['Bacon', 'Eggs', 'Cereal', 'Pancakes']
let joinArray2 = breakfastArray.join(' and ')
console.log('JOIN 2: ', joinArray2)

let NYarray2  = ['New','York','City']
let joinArray3 = NYarray.join('and')
console.log('JOIN 3: ',joinArray3)

// REVERSE

let reverseArray = NYarray.reverse()

console.log("REVERSE: ", reverseArray, NYarray)

// .reverse() -> reverses the order of an array
// changes the original array
//por isso temos que criar uma nova array para colocar esses changes, dessa maneira nao afeta outras
//funcoes que essa array possa estar envolvida

NYarray.reverse()

let reverseArray2 = [...NYarray].reverse()

console.log("REVERSE 2: ", reverseArray2, NYarray)

// Can NOT reverse strings, only arrays:
console.log('REVERSE 3:', 'NEWYORKCITY'.reverse())

//CONCAT 
// array1.concat(array2,..., arrayX) -> joins (concatenates) two or more arrays together 
// does not udpate the existing arrays but returns a new one 
//Diferente de Join, concat can colocar junto diferentes arrays

let firstArray = [1,2]
let secondArray = [3,4,5]
let thirdArray = [6,7,8]
let concatArray = firstArray.concat(secondArray)
console.log('CONCAT: ', concatArray)

let concatArray2 = firstArray.concat(secondArray,thirdArray)
console.log('CONCAT 2: ', concatArray2)


let concatArray3 = [].concat(firstArray,secondArray)
console.log('CONCAT2: ', concatArray3)