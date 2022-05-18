// MAP vs ForEach

let baseArray = [1,2,3,4,5]

let mapArray = baseArray.map(num=>{return num * 5})

let forEachArray = baseArray.forEach(num=>{return num * 5})

console.log('MAP: ',mapArray)
console.log('FOREACH: ',forEachArray)


// .map() -> creates a new array containing the results of the mapping
// .forEach() -> returns nothing, 
// allows you to mutate the base array [is destructive]

let count = 0 
baseArray.forEach(num=>count+=num)
console.log('COUNT: ', count)


let evens: number[] = []
baseArray.forEach(num=> {
    if(num % 2 === 0) evens.push(num)
})
console.log('EVENS FOR EACH: ', evens)

// dont want this result 
let evens2 = baseArray.map(num=> {
    if(num % 2 === 0) return num
})
console.log('EVENS MAP: ', evens2)

// Reduce 
// .reduce() -> executes an operation on each array element and then returns a single value: the accumulation 

let reduceArray = baseArray.reduce((tot,val)=>tot+val,0)
console.log('REDUCE: ',reduceArray)


// Filter
// .filter() -> iterates through an array and removes any element that does not satisfy the specified conditions
// Non-destructive, does not affect the original array
let filterArray = baseArray.filter(num=>num%2!=0)
console.log('FILTER: ', filterArray, baseArray)


// Sort 
// .sort(val1,val2) -> changes the locations of all of the elements in the array IN PLACE, meaning that the original array is updated instead of creating a new one  - is destructive
// based on a certain condition
// if you want to keep the original array the same, create a copy 
// use the spread operator! -> ...

let newArray = [5,2,1,4,3]

let sortArray= newArray.sort((num1,num2)=>num1-num2)
console.log('NUMBER SORTING: ', newArray, sortArray)

let wordArray = ['donut','apple','cherry','flamingo','banana']

let sortedWords = [...wordArray].sort((word1,word2)=>word1.localeCompare(word2))
console.log('CHAR SORTING: ',wordArray,sortedWords)


// FIND
// .find() -> finds the first element of an array that completes a test 

let findArray = wordArray.find(word=>word.length>5)

console.log('FIND:',findArray)



// FIND INDEX
// .findIndex -> finds the index of the first element of an array that completes a test 

let findIndexArray = wordArray.findIndex(word=>word.length>5)
console.log('FIND INDEX: ', findIndexArray)