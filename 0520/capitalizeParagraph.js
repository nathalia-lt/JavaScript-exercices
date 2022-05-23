// When given an paragraph of sentences, return that array with all of the words in their sentences in title case.
function capitalizeParagraph(paragraph){
    //Write your code here:
    let arr = paragraph.split('. ')

    arr = arr.map(word=>(capitalizeSentence(word)))
    return arr.join('. ')
}



// slit turns strings into an array
// .split -> creates an array with the elements the targeted string
// seperates on the specified char without including that element

// DON'T EDIT THESE:
function capitalizeSentence(sentence){
    let arr = sentence.split(' ')
    arr = arr.map(word=>(capitalizeWord(word)))
    return arr.join(' ') 
}
function capitalizeWord(word){
    let upper = word[0].toUpperCase()
    return upper + word.slice(1,)
}


// Run 'node 0520/capitalizeParagraph.js' to test!
console.log('capitalizeParagraph(...)')
console.log('ACTUAL: ', capitalizeParagraph('Youd think being abducted by aliens would be the worst thing that could happen to me. And youd be wrong. Because now the aliens are having ship trouble and theyve left their cargo of human women including me on an ice planet. And the only native inhabitant Ive met?'))
