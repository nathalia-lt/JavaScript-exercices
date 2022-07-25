import fetch from "node-fetch";
//first run json : json-server --watch halloween.json

// await fetch(url)
//         .then(r => r.json())
//         .then(r => {
//             let candies = r
//         })
// }

// All of the following questions will require fetching to the localy hosted json server.

// When the prompt requests you to return something, please console log instead.


// 0. Write a function that returns an array of all of the candy, with no duplicates
// sorted alphabetically from A-Z

let url = 'http://localhost:3000/halloween'

//of = array
//in = obj

async function allCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let candiesArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let candiesNamesObj = objCandies.candy
                //console.log(candiesNamesObj)
                for (let candiesName in candiesNamesObj){
                    //console.log(candiesName)
                    candiesArr.push(candiesName)
                    //console.log(candiesArr)
                }
            }
            let noDuplicates = candiesArr.filter((candy, idx) => candiesArr.indexOf(candy) === idx)
            //console.log(noDuplicates)
            //I am going to interact through the array on both the candy and the index the same time.
            //the filter looks for true condition. Index of is going return the index of the first index of candy
            noDuplicates.sort((word1, word2) => word1.localeCompare(word2))
            //console.log(noDuplicates)
            console.log(noDuplicates.length)
        })
}

//allCandy()

// BONUS -> Write a function that uses the above function to return the total number of the different kinds of candy


// CAME BACK HERE TO FINISH
async function numOfCandy(){
    let candyCount = {} //inside here comes my key value pairs, that I check on the ternary operation 
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            for (let objCandies of candies){
                //console.log(objCandies)
                let candiesNamesObj = objCandies.candy
                //console.log(candiesNamesObj)
            for (let candiesName in candiesNamesObj){
                console.log(candiesName)
                
            }
            }      
    })
}

//numOfCandy()


// 1. Write a function that returns the person who got the greatest amount of candy

async function mostCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let maxAmount = 0
            let name = ''
            for (let objCandies of candies){
                //console.log(objCandies)
                let personName = objCandies.name
                    //console.log(personName)
                let candies = objCandies.candy    
                console.log(candies)
                let amount = 0
                for (let candy in candies) {
                    console.log(candies[candy]['amount'])
                    amount += candies[candy]['amount']
                }
                console.log(amount)
                if(maxAmount < amount) {
                    maxAmount = amount
                    name = personName
                }        
            }
            console.log(name)
            console.log(maxAmount)
        })
}



//mostCandy()

// 2. Write a function that returns the person who got the least amount of candy

//how to return when two people has less amount of candy (both has 5)

async function leastCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let lessAmount = Infinity
            let name = ''
            for (let objCandies of candies){
                //console.log(objCandies)
                let namePerson = objCandies.name
                //console.log(namePerson)
                let candiesInfo = objCandies.candy
                //console.log(candiesInfo)
                let candiesAmount = 0
                for (let candy in candiesInfo){
                    let amountOfCandies = candiesInfo[candy]['amount']
                    if(candiesAmount < amountOfCandies)
                    candiesAmount = candiesAmount + amountOfCandies
                }
                if(candiesAmount < lessAmount){
                    lessAmount = candiesAmount
                    name = namePerson
                }    
            }
            console.log(name)
        })
}


//leastCandy()


// 3. Write a function that returns the total amount of candy received by all of the people.

async function totalAmountofCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let amountArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let candiesNameObj = objCandies.candy
                //console.log(candiesNameObj)
                for (let candy in candiesNameObj){
                    let amountOfCandies = candiesNameObj[candy]['amount']
                    //console.log(amountOfCandies)
                    amountArr.push(amountOfCandies)
                    //console.log(amountArr)
                }
            }
            let reduceArr = amountArr.reduce((tot, val) => tot+val, 0)
            console.log(reduceArr)
        })
}

// Reduce 
// .reduce() -> executes an operation on each array element and then returns a single value: the accumulation 
// you can use not just numbers
// let reduceArray = baseArray.reduce((tot,val)=>tot+val,0)
// console.log('REDUCE: ',reduceArray)


//totalAmountofCandy()


// 4. Write a function that returns the candy with the longest name

async function candyWithLongestName(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let longestName = ''
            //let longestLength = 0
            for (let objCandies of candies){
                //console.log(objCandies)
                let candiesNameObj = objCandies.candy
                //console.log(candiesNameObj)
                for (let candy in candiesNameObj){
                    if (candy.length > longestName.length){//when it is string, I only need one place holder. When compare the strings
                        //longestLength = candy.length
                        longestName = candy
                    } 
                }
            }
            console.log(longestName)
            //console.log(longestLength)
        })

}

//candyWithLongestName()

// BONUS: Write a function that returns the candy with the shortest name

async function candyWithShortestName(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let shortestName = ''
            let nameLength = Infinity
            let candies = r
            for (let objCandies of candies){
                //console.log(objCandies)
                let candyNameObj = objCandies.candy
                //console.log(candyNameObj)
                for (let candy in candyNameObj){
                    //console.log(candy)
                    if (candy.length < nameLength)
                    nameLength = candy.length
                    shortestName = candy
                }
            }
            console.log(shortestName)
            console.log(nameLength)
        })

}

//candyWithShortestName()


// 5. Write a function that returns the candy that has the largest single amount for single person

async function largestAmountCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let candyName = ''
            let largestAmountCandy = 0
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandiesName = objCandies.candy
                //console.log(objCandiesName)
                for (let candy in objCandiesName){
                    let amoutOfEachCandy = objCandiesName[candy]['amount']
                    if(amoutOfEachCandy > largestAmountCandy){
                    largestAmountCandy = amoutOfEachCandy
                    candyName = candy
                }
            }
        }
        console.log(largestAmountCandy)
        console.log(candyName)
        })
}

//largestAmountCandy()


// 6. Write a function that returns an array of all of the candy that have amounts greater than 5
// Sorted by length of the names, greatest to shortest (???)

async function greaterThan5Candy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let candiesNumArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandiesName = objCandies.candy
                //console.log(objCandiesName)
                for (let candyName in objCandiesName){
                    //console.log(candyName)
                    let amountOfCandy = objCandiesName[candyName]['amount']
                    //console.log(amountOfCandy)
                    if (amountOfCandy > 5){
                        candiesNumArr.push(candyName)
                    }
                }    
            }
            candiesNumArr.sort((word1, word2) => word2.length - word1.length)
            console.log(candiesNumArr)
        })
    }


//greaterThan5Candy()

// 7. Write a function that returns an array of the names of people who received a candy of the type 'sour'
// Sorted alphabetically A-Z

async function peopleWithSourCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let sourPeopleArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let peopleName = objCandies.name
                //console.log(peopleName)
                let objCandiesName = objCandies.candy
                //console.log(candiesName)
                for (let candy in objCandiesName){
                    //console.log(candy)
                    let typeCandies = objCandiesName[candy]['type']
                    //console.log(typeCandies)
                    if (typeCandies === 'sour'){
                        sourPeopleArr.push(peopleName)
                    }
                }
            }
            sourPeopleArr.sort((word1, word2) => word1.localeCompare(word2))
            console.log(sourPeopleArr)
        })
}

//peopleWithSourCandy()

// 8. Write a function that returns an array of all of the candy
// filtered for candy that starts with s
// map and add ('cherry-flavored ') to the front of the candy
// sort by candy name length shorted to greates


async function candyWithS(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let candiesArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandiesName = objCandies.candy
                //console.log(objCandiesName)
                for (let candy in objCandiesName){
                    candiesArr.push(candy) //aqui eu coloco as candies dentro da array antes the filtrar. pq o metodo filtro so funciona com arrays 
                }
            }
            candiesArr = candiesArr.filter(candy => candy[0] === 's')//to finish with 's' candy[candy.length-1]
            //console.log(candiesArr)
            candiesArr = candiesArr.map(candy => 'cherry-flaured ' + candy)
            //console.log(candiesArr)
            candiesArr.sort((word1, word2) => word1.length - word2.length)
            console.log(candiesArr)
        })
}

// let name = 'nickers'
// console.log(name[name.length-1])

// candyWithS()

// 9. Write a function that returns an array of all of the candy with type chocolate
// filtered for candy that have a name longer than 6
// sorted alphabetically Z-A

async function chocolateCandy(){  
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let chocolateTypeArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandiesName = objCandies.candy
                //console.log(objCandiesName)
                for (let candy in objCandiesName){
                    //console.log(candy)
                    let candyType = objCandiesName[candy]['type']
                    //console.log(candyType)
                    if (candyType === 'chocolate'){
                        chocolateTypeArr.push(candy)
                        //console.log(chocolateTypeArr)
                    }
                }
            }
            let candyLongerThan10 = chocolateTypeArr.filter(candy => candy.length > 10)
            //console.log(candyLongerThan10)
            candyLongerThan10.sort((word1, word2) => word2.localeCompare(word1))
            //console.log(candyLongerThan10)
             let noDuplicates = candyLongerThan10.filter((candy, idx) => candyLongerThan10.indexOf(candy) === idx)
            console.log(noDuplicates)
        })
}


//chocolateCandy()


// 10. Write a function that returns an array of all of the candy that do not have an allergen
// sorted A-Z

async function noAllergenCandy(){
await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let noAllergenArr = []
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandiesName = objCandies.candy
                //console.log(objCandiesName)
                for (let candy in objCandiesName){
                    //console.log(candy)
                    let candyAllergen = objCandiesName[candy]['allergen']
                    //console.log(candyAllergen)
                    if( candyAllergen === 'none'){
                        noAllergenArr.push(candy)
                    }
                }
            }
            noAllergenArr.sort((word1, word2) => word1.localeCompare(word2))
            console.log(noAllergenArr)
        })
}


//noAllergenCandy()

// 11. Write a function that returns true/false depending on if the candy that received the single greatest amount
// has the longest name.

//why is it been console.log more than false??

async function longNameGreatestAmount(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let greateastAmount = largestAmountCandy()
            let longestName =  candyWithLongestName()
            if (greateastAmount == longestName){
                console.log(true)
            }else{
                console.log(false)
            }
        })
}


//longNameGreatestAmount()

// 12. Write a function that returns the name of the person who received the greatest amount of candy 
// that has a nut allergy

async function nutAllergy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let biggestAmountNutsAllergen = 0
            let name = ''
            for (let objCandies of candies){
                let totalAmountofCandyWithNutsAllergen = 0
                //console.log(objCandies)
                let personName = objCandies.name
                //console.log(personName)
                let objCandy = objCandies.candy
                //console.log(objCandy)
                for (let candy in objCandy){
                    //console.log(candy)
                    let amountOfCandies = objCandy[candy]['amount']

                    //console.log(amountOfCandies)
                    let candyAllergen = objCandy[candy]['allergen']
                    //console.log(candyAllergen)
                    if (candyAllergen === 'nuts'){ // the code bellow only run if this condition is true
                        //console.log(amountOfCandies)
                            totalAmountofCandyWithNutsAllergen = totalAmountofCandyWithNutsAllergen + amountOfCandies //here I am some the total of the amount of candies that has allergen nuts
                            //console.log(totalAmountofCandy)
                    }
                }
                if (biggestAmountNutsAllergen < totalAmountofCandyWithNutsAllergen){
                    biggestAmountNutsAllergen = totalAmountofCandyWithNutsAllergen
                    name = personName
                }
            }
            console.log(name)
            console.log(biggestAmountNutsAllergen)
        })
}

//nutAllergy()


// 13. Write a function that returns the name of the person who received the least amount of candy
// that has a type of sugar

async function leastSugarCandy(){
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let leastAmountOfSugarCandy = Infinity
            let name = ''
            for (let objCandies of candies){
                let numSugarCandy = 0
                //console.log(objCandies)
                let personName = objCandies.name
                //console.log(personName)
                let objCandy = objCandies.candy
                //console.log(objCandy)
                for (let candy in objCandy){
                    //console.log(candy)
                    let amountOfCandies = objCandy[candy]['amount']
                    let candyType = objCandy[candy]['type']
                    //console.log(candyType)
                    if(candyType === 'sugar')
                    numSugarCandy = numSugarCandy + amountOfCandies
                    //console.log(candyType, personName)
                }
                if (numSugarCandy < leastAmountOfSugarCandy){
                    leastAmountOfSugarCandy = numSugarCandy
                    name = personName
                }
            }
            console.log(leastAmountOfSugarCandy) //quando dois tem o mesmo small amount, como retornar both??
            console.log(name)
        })
}

//leastSugarCandy()

// 14. Write a function that returns the candy type that appears least in the entire database

async function appearsLeastCandy(){
    let leastCandyType = {}//inside here comes my key value pairs, that I check on the ternary operation 
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let candies = r
            let appearsLeast = ''
            for (let objCandies of candies){
                //console.log(objCandies)
                let objCandy = objCandies.candy
                //console.log(objCandy)
                for (let candy in objCandy){
                    //console.log(candy)
                    let candyType = objCandy[candy]['type']
                    //console.log(candyType)
                    leastCandyType[candyType] ? leastCandyType[candyType]+=1 :leastCandyType[candyType]=1
                    //console.log(leastCandyType)
                }
                let leastcount = Infinity
                for (let type in leastCandyType){
                    //console.log(type)
                    if (leastcount > leastCandyType[type]){
                        leastcount = leastCandyType[type]
                        appearsLeast = type
                    }
                }
            }
            console.log(appearsLeast) //why is it showing more than one resposta
        })
    }

//appearsLeastCandy()


   // 1 ? 2 : 3 
                //1. we are going to check if there is a key called candyType (sour, chocolate, sugar...) inside of 
                //leastCandyType (we are going to put new keys values pairs inside the genreCount)
                // 2. if the key exists inside of leastCandyType already, then we need to increase 
                // the value by 1 ( the count of the times that genre has appeared)
                // 3. if the key does not exist inside of leastCandyType, we need to create a new key:value 
                // pair (we havent seen this genre yet before) 