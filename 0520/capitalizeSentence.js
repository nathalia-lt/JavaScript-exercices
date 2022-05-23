// When given a sentence of words, return that sentence with all of the words in title case.
function capitalizeSentence(sentence){
    // Write your Code Here:
    let arr = sentence.split(' ')
    arr = arr.map(word=>(capitalizeWord(word)))
    return arr.join(' ') //nao esquecer do espaco between parenteses
    // one line solution
    // return sentence.split(' ').map(word=>(capitalizeWord(word))).join(' ')
}

// slit turns strings into an array
// .split -> creates an array with the elements the targeted string
// seperates on the specified char without including that element

function capitalizeWord(word){
    let upper = word[0].toUpperCase()
    return upper + word.slice(1,)
}

// Run 'node 0520/capitalizeSentence.js' to test!
console.log('capitalizeSentence(Youd think being abducted by aliens would be the worst thing that could happen to me.)')
console.log('ACTUAL: ', capitalizeSentence('Youd think being abducted by aliens would be the worst thing that could happen to me.'))

console.log(' ')
console.log('capitalizeSentence(And youd be wrong.)')
console.log('ACTUAL: ', capitalizeSentence('And youd be wrong.'))

console.log(' ')
console.log('capitalizeSentence(Because now, the aliens are having ship trouble, and theyve left their cargo of human women including me on an ice planet.)', 'Because now, the aliens are having ship trouble, and theyve left their cargo of human women including me on an ice planet.')
console.log('ACTUAL: ', capitalizeSentence('Because now, the aliens are having ship trouble, and theyve left their cargo of human women including me on an ice planet.'))