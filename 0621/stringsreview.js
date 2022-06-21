// 0. Write a function that accepts a string and returns that string's fifth character 
// if the string is shorter than five, return the last character in the string

// EX: fifthChar('peanut') -> 'u'
// EX: fifthChar('car') -> 'r'

//I would go through each letter in my string
//then I would find the fifth letter and return it - if( str.lenght >= 5)
//If there is no fifth letter I would return the last one.



// 0 1 2
// C A R

function fifthChar(str){
    if (str.length >= 5){ //tem que ser .length, assim ambos sao numeros
        return str[4]
    }else{
        return str[str.length -1]
    }
    
}

// Uncomment the following lines to test your code:
console.log(fifthChar('peanut'))
console.log(fifthChar('car'))
console.log(fifthChar('filet mignon'))


// 1. Write a function that accepts an array of strings and return the array with result of applying the function above to each of its values

// EX: arrayOfChars(['peanut','car','eyes','angel']) -> ['u','r','s','l']

function arrayOfChars(arr){
    //Write your code here:
}

// Uncomment the following lines to test your code:
// console.log(arrayOfChars(['peanut','car','eyes','angel']))
// let words2 = ['newt','apple','isoceles','triangle','nerd','magic','node','purple','nuclear','jet','nucleus']
// console.log(arrayOfChars(words2))


// 2. Write a function that accepts a string and return an array that contains the original string and the string shortened by two
// EX: arrayOfShortenStrings('steak') -> ['steak','ste']

function arrayOfShortenStrings(str){
    //Write your code here:
}

// Uncomment the following lines to test your code:
// console.log(arrayOfShortenStrings('steak'))