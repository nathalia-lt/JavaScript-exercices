function capitalizeWord(word){
    // Write your Code Here:
    // let upper = word.slice(0,1).toUpperCase()
    let upper = word[0].toUpperCase()
    // return upper.concat(word.slice(1,))
    return upper + word.slice(1,)
}

// word[0]
// word.charAt(0)


//start with 0, only count with indexOf1, nesse caso sao letras, entao vamos comecar com 1

// any symbol can be called a character 
// just a title, not an actual type of variable 
// 'h' '1' '/' '!' ','


// Run 'node 0520/capitalize.js' to test!
console.log('capitalize(dog)')
console.log('EXPECTED: ', 'Dog')
console.log('ACTUAL: ', capitalizeWord('dog'))

console.log(' ')
console.log('capitalize(maximum)')
console.log('EXPECTED: ', 'Maximum')
console.log('ACTUAL: ', capitalizeWord('maximum'))

console.log(' ')
console.log('capitalize(asdfadsf)', 'asdfadsf')
console.log('EXPECTED: ', 'Asdfadsf')
console.log('ACTUAL: ', capitalizeWord('asdfadsf'))