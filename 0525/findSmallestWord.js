// Given a sentence as a singular string, find and return the smallest word

function findShortestString(sentence){
    let arr = sentence.split(' ')
    let smallest = 2 ** 32
    let stringValue = ''
    for(let word of arr){
        let numWords = word.length
        if(smallest > numWords){
            smallest = numWords
            stringValue = word
        }
        
    }
    return stringValue
}

//I need to go through the sentence
//then count how many string there is in each sentence
//return the smallest word


console.log("Expecting: 'a'");
  console.log("=>", findShortestString('aaa a bb ccc'));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString('cat hi dog an'));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString('flower juniper lily dadelion'));