// Array Iteration:

let movies = ['The Maltese Falcon', 'The Big Sleep', 'Casablanca', 'Key Largo']
// to get a specfic movie, you can call to its index -> movies[i]

console.log('THE SECOND MOVIE: ',movies[0])

// option 1: 
console.log('MOVIES 1 : ')
//  for (start, stop,) what we do after all of the logic inside the loop executes )
for (let i=0; i < movies.length; i++){ //os ii e para percorrer por toda array || > means: the last value can be the last value on movies
    console.log(movies[i])
    if (movies[i]==='Casablanca') console.log(i)
}

// option 2:
console.log('MOVIES 2: ')
movies.forEach(movie=>console.log(movie))//for each vai em um por um na array (like map but different)

// option 3:
console.log('MOVIES 3: ')
movies.map(movie=>console.log(movie))


// option 4:
console.log('MOVIES 4: ')

for (let movie of movies){ //o jeito mais facil de ir em um por um na array
    console.log(movie)
}




// INCLUDES

//Includes means to check if it is included in the array AND NOT to includes it in the array.
// .includes(element) -> returns true or false if the specified element is in the array
let title = 'The Godfather'
let includes1 = movies.includes(title)

console.log('INCLUDES 1: ', includes1)

let includes2 = movies.includes('The Big Sleep')

console.log('INCLUDES 2: ', includes2)



// INDEXOF
// .indexOf(element) -> returns the index of the specified element
// if the element is not in the array, returns -1

let indexOf1 = movies.indexOf('The Big Sleep') //com indexOf, se verifica se o que estamos procurando
//esta dentro da array

console.log('INDEX OF 1: ', indexOf1)

let indexOf2 = movies.indexOf('The Godfather')

console.log('INDEX OF 2: ', indexOf2)



// FIND
// .find() -> finds the first element of an array that completes a test 

let findArray = wordArray.find(word=>word.length>5)

console.log('FIND:',findArray)



// FIND INDEX
// .findIndex -> finds the index of the first element of an array that completes a test 

let findIndexArray = wordArray.findIndex(word=>word.length>5)
console.log('FIND INDEX: ', findIndexArray)


// INDEX OF vs FIND INDEX
// arr.indexOf(element) -> when you know the specific element you are looking for
// arr.findIndex(fn(testcase)) -> when you dont know the specific element but want to find the first element that satisfies a condition


//CREATING A RANGE OF NUMBERS 

//Normally you would do this:
let num = 10

let nums = []
for (let i=0; i <10; i++){
    nums.push(i)
}

console.log('FOR LOOP: ',nums)

//ALTERNATIVE:

// Only use this in specific circumstances when you need an array of numbers from 0 to num

let nums2 = [...Array(num).keys()]

for (let num of nums2){
    console.log(movies[num])
}

console.log('ALTERNATIVE: ', nums2)