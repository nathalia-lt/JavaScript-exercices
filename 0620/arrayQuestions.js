// Use .map, .forEach, .filter, or .reduce to solve the following problems:


// 0. Write a function that accepts an array of numbers and returns an array of the same values squared
// Example: [2,3,4] -> [4,9,16]
function squared(nums) {
    return nums.map(num => { return num * num })
    //traducao: 2 => {return 2 *2 } com map vai um por um na array
    // 3 => { return 3 * 3 } e assim sucessivamente
}

// Test your code by uncommenting the following:

// let numArr1 = [1,2,3,4,5,6,7,8,9,10]
// console.log(squared([100,12,3,5,32]))


// 1. Write a function that accepts an array of numbers and returns an array of only the odd numbers
// asking for specific criteria here: filter oouuutt
function onlyOdds(nums) {
    //filter only returns the results that matchs (true) the criteria
    return nums.filter(num => { return num % 2 !== 0 })

}

// Test your code by uncommenting the following:

// let numArr2 = [0,22,82,43,13,32,34,21,11,100,2,48]
// console.log(onlyOdds(numArr2))

// 2. Write a function that accepts an array of numbers and returns the total of all of the even numbers

function sumEvens(nums) {
    //tennho que colocar total e value entre parentes, pq e mais de um.
    return nums.reduce((total, num) => {
        //aqui eu uso o if statemt dentro do reduce, e se o reminder for 0(o que quer dizer par)
        //significa que e par, entao eu retorno o total + par
        if (num % 2 === 0) {
            return total + num
        } else {
            return total
        }
    }, 0)
    //o 0 e onde o index da array, vai comercar.

    // Reduce does the same thing as the following, just in a way that saves time and space 
    // let total = 0
    // nums.forEach(num => {
    //     if (num % 2 === 0) {
    //         return total + num
    //     }
    // })
    // return total
}

// Test your code by uncommenting the following:

// let numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(sumEvens(numArr1))

// 3. Write a function that accepts an array of strings and returns an array of only strings that are longer than 4:

function longStrings(strings) {
    return strings.filter(word => {
        return word.length > 4
    })
}


// Test your code by uncommenting the following:

// let colors = ['red','green','blue','grey','navy','pink','white','orange']
// console.log(longStrings(colors))


// 4. Write a function that accepts an array of strings and returns an 
//array of the same strings with a greeting:
// EXAMPLE: 'Arty' -> 'Hello Arty!'

function greetings(strings) {
    return strings.map(word => 'hello ' + word)

}

// Test your code by uncommenting the following:

// let names = ['Arty','Greta','Camille','Marie','Mersault','Jean','Celeste','Simone']
// console.log(greetings(names))

// 5. Write a function that accepts an array of strings and returns the longest string

function longestStr(strings) {
    let longest = ''
    strings.forEach(word => {
        if (word.length > longest.length) {
            longest = word
        }
    }
    )
    return longest
}

//following, another way to do the same problem, using reduce.
function longestString(strings){
return strings.reduce((longest,word)=>{
    if (word.length > longest.length){
        return word
    } else{
        return longest
    }
},'')}


// Test your code by uncommenting the following:

// let fruits = ['apple', 'banana', 'dragonfruit', 'orange', 'pear', 'grape', 'cantaloupe', 'pineapple', 'kiwi']
// console.log(longestStr(fruits))

// 6. Write a function that accepts an array of strings and returns an array of numbers 
//that represent the length of the strings divided by 2 and rounded
// EX: ['car','moat','floar','ceiling'] -> [2,2,3,4]


function lengthDiv(strings){
    return strings.map(word => Math.round(word.length / 2 ))
}

// Test your code by uncommenting the following:

// let words1 = ['car','moat','floar','ceiling','dragonfruit','orange','pear','grape','cantaloupe','pineapple']
// console.log(lengthDiv(words1))
//console.log(Math.round(7.5))


// 7. Write a function that accepts an array of strings and 
//returns an array of strings that begin with a specific letter

//Im gonna interate through the array
//Now that Im on each word



//Im going to find the first letter on each word

//console.log('apple'[0])

//then Im going to compare that to a specific letter

//console.log('apple'[0] == 'n') //false
//if they are the same keep the word
//if not get rid of it


// filter
// 

function beginsWith(strings,letter){
    return strings.filter(word => {return word[0] == letter })
}

// Test your code by uncommenting the following:

// let words2 = ['newt','apple','isoceles','triangle','nerd','magic','node','purple','nuclear','jet','nucleus']
// console.log(beginsWith(words2,'n'))


// 8. Write a function that accepts an array of strings and returns 
//the same array sorted by longest string to shortest 
// Use .sort()

//Im going to interate through the array
//then Im going to get to argumets to compare
//Im going to check each one is the longest
//then Im going to create a new array with the longest to shorest


//what does localeCompare do:
//It compares if the first lettter in the first word
//comes before the first letter in the second word in the alphabet
// basicaly puts the words in alphabet order



function sortStrings(strings){
    return strings.sort((word1, word2) => word1.length - word2.length)
}

//If I want to compare smallest to greates I use -
//If I want to compare the greateast to the smallest, I have to switch 
//word2 (comes first) with word2
//ex word2 - word1

// Test your code by uncommenting the following:

let words1 = ['car','moat','floar','ceiling','dragonfruit','orange','pear','grape','cantaloupe','pineapple']
console.log(sortStrings(words1))