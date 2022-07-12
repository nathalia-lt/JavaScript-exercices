import fetch from "node-fetch";
//first run json : json-server --watch movies.json

// All of the following questions will require fetching to the localy hosted json server.

// async function leastNumPlayed() {
//     await fetch(url)
//         .then(r => r.json())
//         .then(r => {}

let url = 'http://localhost:3000/movies'


// function fetchData() {
//     fetch(url)
//         .then(r => r.json())
//         .then(r => console.log(r))
//         .catch(r => console.log(error))
// }

//fetch()

// 0. Write a function that returns an array of all of the actors, with no duplicates

async function allActors() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            let actorsArr = []
            //console.log(movies)
            for (let objMovies of movies) {
                //console.log(objMovies)
                let numActors = objMovies.actors
                //console.log(numActors)
                // for (let actor of numActors){
                //     actorsArr.push(actor)
                // } other way to do 
                actorsArr.push(numActors)
                console.log(actorsArr)
                let newArr = actorsArr.flat() // here I garther all the arrays together, in one array
                console.log(newArr)
                let actorsNoDuplicate = newArr.filter((actor, idx) => newArr.indexOf(actor) === idx)
                //I am going to interact through the array on both the actor and the index the same time.
                //the filter looks for true condition. Index of is going return the index of the first index of actor
                console.log(actorsNoDuplicate)
            }
        })
}

//allActors()

// 1. Write a function that returns the movie that was released earliest

async function earliestRelease() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            let releaseYear = Infinity
            let movieName = ''
            //console.log(movies)
            for (let objMovies of movies) {
                //console.log(objMovies)
                let yearMovie = objMovies.year
                //console.log(yearMovie)
                if (yearMovie < releaseYear) {
                    releaseYear = yearMovie
                    movieName = objMovies.title
                }
            }
            console.log(movieName)
        })
}

//earliestRelease()

// 2. Write a function that returns the total number of actors in this database

async function totalNumActors() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r

            //console.log(movies)
            let toArray = []
            for (let i = 0, len = movies.length; i < len; i++) {
                toArray.push(...movies[i].actors);
            }
            //console.log(toArray)
            let unique = new Set(toArray) //new Set ensure that the elements are unique
            unique = [...unique] //here we are going to desconstruct the values of the unique into a new array
            console.log(unique.length) // and then I will be able to get the length
        })
}

//totalNumActors()

// 3. Write a function that returns the total amount spent on budgets

async function totalBudget() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            let totalAmount = 0
            //console.log(movies)
            for (let objMovies of movies) {
                let numBudget = objMovies.budget
                //console.log(numBudget)
                totalAmount = totalAmount + numBudget
            }
            console.log(totalAmount)
        })
}

// totalBudget()

// 4. Write a function that returns the director with the longest name

async function longestDirectorName() {
    let directorWithTheLongestName = ''
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)

            for (let objMovies of movies) {
                let directorsName = objMovies.director
                //console.log(directorsName.length)
                if (directorWithTheLongestName.length < directorsName.length) {
                    directorWithTheLongestName = directorsName
                }
            }
            console.log(directorWithTheLongestName)
        })
}

//longestDirectorName()

// 5. Write a function true/false if the movie with the largest budget has the longest name

async function longNameBigBudget() {
    let largestBudget = 0
    let largestBudgetTitle = ''
    let longestName = ''
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            for (let objMovie of movies) {
                let budgetAmount = objMovie.budget
                //console.log(budgetAmount)
                if (budgetAmount > largestBudget) {
                    largestBudget = budgetAmount
                    largestBudgetTitle = objMovie.title
                }
            }
            let titleArr = movies.map(movie => movie.title)
            //console.log(titleArr)
            for (let title of titleArr) {
                //console.log(title)
                if (title.length > longestName.length) {
                    longestName = title
                    //console.log(title)
                }
            }
            console.log(largestBudgetTitle === longestName)

        })
}

//longNameBigBudget()

// 6. Write a function that returns an array of all of the names of the actors, 
// with their last name in front of the first name 
// sorted from Z-A
// EX: Robert Pattinson -> Pattinson Robert --> how?? :((

let exampleName = 'Liam Charles'
// 1. separate first and last name -> split
let exampleName2 = ['Liam', 'Charles']
// 2.  reverse positioning - > reverse()
let exampleName3 = ['Charles', 'Liam']
//3. join
let exampleName4 = ['Charles Liam']

// let exampleName = 'Liam Charles'

//console.log(exampleName.split(' ').reverse().join(' '))


async function reverseName() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            let actorsArr = movies.map(movie => movie.actors).flat()
            //console.log(actorsArr)
            let actorsNoDuplicate = actorsArr.filter((actor, idx) => actorsArr.indexOf(actor) === idx)
            //console.log(actorsNoDuplicate)
            let reversedNames = actorsNoDuplicate.map(actor => actor.split(' ').reverse().join(' '))
            //console.log(reversedNames)
            reversedNames.sort((word1, word2) => word2.localeCompare(word1))
            console.log(reversedNames)
        })
}

//reverseName()

// 7. Write a function that first makes an array of all the actors with no duplicates, 
// and returns an array of the length of all those names

async function lengthOfNames() {
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            let actorsArr = movies.map(movie => movie.actors).flat()
            //console.log(actorsArr)
            let actorsNewArr = actorsArr.filter((actor, idx) => actorsArr.indexOf(actor) === idx)
            //console.log(actorsNewArr)
            let lengthArr = actorsNewArr.map(actor => actor.length)
            console.log(lengthArr)
        })
}

//lengthOfNames()

// 8. Write a function that returns an array of
// all of the names of all of the movies that feature Juliette Binoche 

async function juliette() {
    let julietteMovies = []
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            for (let movieObj of movies) {
                let titleMovie = movieObj.title

                let actorsMovie = movieObj.actors
                //console.log(actorsMovie)
                for (let actor of actorsMovie) {
                    //console.log(actor)
                    if (actor === 'Juliette Binoche') {
                        julietteMovies.push(titleMovie)
                    }
                }
            }
            console.log(julietteMovies)
        })
}

//juliette()

// 9. Write a function that returns all of the unique genres

async function uniqueGenres() {
    let mostGenre = []
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            for (let objMovies of movies) {
                let movieGenre = objMovies.genre
                //console.log(movieGenre)
                if (!mostGenre.includes(movieGenre)) {
                    mostGenre.push(movieGenre)
                }
            }
            console.log(mostGenre)
        })

}

// uniqueGenres()

// 10. Write a function that returns the genre that appears most

async function mostPopularGenre() {
    let genreCount = {} //inside here comes my key value pairs, that I check on the ternary operation 
    await fetch(url)
        .then(r => r.json())
        .then(r => {
            let movies = r
            //console.log(movies)
            for (let objMovies of movies) {
                let movieGenre = objMovies.genre
                //console.log(movieGenre)
                genreCount[movieGenre] ? genreCount[movieGenre]+=1 : genreCount[movieGenre]=1
                // console.log(genreCount)

                // 1 ? 2 : 3 
                //1. we are going to check if there is a key called movieGenre (horror, drama...) inside of 
                //genreCount (we are going to put new keys values pairs inside the genreCount)
                // 2. if the key exists inside of genreCount already, then we need to increase 
                // the value by 1 ( the count of the times that genre has appeared)
                // 3. if the key does not exist inside of genereCount, we need to create a new key:value 
                // pair (we havent seen this genre yet before) 
            }
            let largestCount = 0
            let genreWithLargestCount = ''
            for (let genre in genreCount){
                //console.log(genre)
                if (largestCount < genreCount[genre]){//eu encontro o value do meu genre genreCount[genre]
                    largestCount = genreCount[genre]
                    genreWithLargestCount = genre
                } 
            }
            console.log(genreWithLargestCount)
        })

}

mostPopularGenre()