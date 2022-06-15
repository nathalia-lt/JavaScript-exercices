// Below is an object of a bookshelf split between two readers: Michelle and Valentina
// organized by books that they have finished, are currently reading, want to read, or did not finish
const bookShelf = {
    "michelle": {
        "finished": {
            "Five Little Pigs": {
                "author": "Agatha Christie",
                "genre": "mystery",
                "pages": 224
            },
            "Darkfever": {
                "author": "Kara Marie Moning",
                "genre": "romance",
                "pages": 224
            },
            "Dead Until Dark": {
                "author": "Charlaine Harris",
                "genre": "romance",
                "pages": 292
            },


        },
        "reading": {
            "Moon Called": {
                "author": "Patricia Briggs",
                "genre": "romance",
                "pages": 292
            },
            "The Darkest Night": {
                "author": "Gena Showalter",
                "genre": "romance",
                "pages": 379
            },

        },
        "toRead": {
            "Clockwork Angel": {
                "author": "Cassandra Clare",
                "genre": "romance",
                "pages": 479
            },

        },
        "didNotFinish": {
            "Young Prince": {
                "author": "Holly Black",
                "genre": "fantasy",
                "pages": 370
            },

        }
    },
    "valentina": {
        "finished": {
            "Sirens of Titan": {
                "author": "Kurt Vonnegut",
                "genre": "scifi",
                "pages": 314
            },
            "Dune": {
                "author": "Frank Herbert",
                "genre": "scifi",
                "pages": 658
            },
            "Dune Messiah": {
                "author": "Frank Herbert",
                "genre": "scifi",
                "pages": 337
            },
            "Children of Dune": {
                "author": "Frank Herbert",
                "genre": "scifi",
                "pages": 609
            },
            "Slaughterhouse-Five": {
                "author": "Kurt Vonnegut",
                "genre": "fiction",
                "pages": 275
            },

        },
        "reading": {
            "God Emperor of Dune": {
                "author": "Frank Herbert",
                "genre": "scifi",
                "pages": 587
            },

        },
        "toRead": {
            "Starship Troopers": {
                "author": "Robert Heinlien",
                "genre": "scifi",
                "pages": 264
            },
            "Neuromancer": {
                "author": "William Gibson",
                "genre": "scifi",
                "pages": 292
            },
            "Do Androids Dream of Electric Sheep?": {
                "author": "Philip K. Dick",
                "genre": "scifi",
                "pages": 258
            },
        },
        "didNotFinish": {
            "Ice Planet Barbarians": {
                "author": "Ruby Dixon",
                "genre": "romance",
                "pages": 188,
            }
        }
    }

}


// Exercises: 
// Before writing code, please write your process on how you would solve the problem without coding


// 1. Write a function that console log on one line the title and author of the book that Michelle did not finish
// Dune Heretics by Frank Herbert


//Write Your Process Here:
// Im going to Michelle's book shelf, then 
//Im going to girls shelves then to girls's dnf shelf
//Im going to get the title of the book and from there
//get the author of the book
function dnfLineMessage() {
    let miShelf = bookShelf['michelle']
    console.log(miShelf)
    let dnfShelf = miShelf.didNotFinish
    //console.log(dnfShelf)
    for (let bookTitle in dnfShelf) {
        //console.log(bookTitle)
        let bookInf = dnfShelf[bookTitle]
        //console.log(bookInf)
        let bookAuthor = bookInf.author
        // console.log(bookAuthor)
        console.log(bookTitle, ' by ', bookAuthor)
    }
}
//dnfLineMessage()

// 2. Write a function that returns the total number of books on the bookshelf

//Write Your Process Here:
//Im going to set a place holder variable
//Im going to get girls book shelves
//then get into each shelf 
//and count each book
//Im going to replace the number on the holder each time I count a new book

let totalBooksNum = 0
//When you have to count a number of things you always have to start from 1
//when it is indexes we count from 0.
function totalBooks() {
    for (let girlsBookShelves in bookShelf) {
        //console.log(girlsBookShelves)
        let objShelves = bookShelf[girlsBookShelves]
        //console.log(objShelves)
        for (shelves in objShelves) {
            //console.log(shelves)
            let objBook = objShelves[shelves]
            //console.log(objBook)
            for (titles in objBook) {
                //console.log(titles)
                totalBooksNum = totalBooksNum + 1
                //o de cima is going to add one book at time to my place holder
                // totalBooksNum+=1 (other option)
                // totalBooksNum++ (other option)
            }
        }
    }
    return totalBooksNum
}

//console.log(totalBooks())

// 3. Write a function that returns the number of books that Valentina read

//Write Your Process Here: 
//Im going straight to valentinas book shelf - bookShelf.valentina
//Im going through her book shelf and choose the finished book shelf - key:finishied
//Im going to count how many books she finished - place holder (outside of the function)
//Im going to count the books that are on her finished book shelf - for loop then 
//Im going to add them into the place holder - placeholder = placeholder + 1 

let numBooksRead = 0

function valBooks() {
    let valenShelves = bookShelf.valentina
    //console.log(valenShelves)
    let readBooks = valenShelves.finished
    //console.log(readBooks)
    for (let books in readBooks) {
        //console.log(books)
        numBooksRead = numBooksRead + 1
    }
    //console.log(numBooksRead)
    return numBooksRead
}

//console.log(valBooks())



// 4. Write a function that returns the title of the longest book that either Michelle or Valentina read

//Write Your Process Here:
//place holder for the longest book
//Im going through both girls shelves - for loop
// Im going to find the shelf for each girl - key:wherever my variable name is 
//then Im going through their finished shelves - key:finished
//Then Im going through the titles - for loop
//then Im going through the titles info - key: wherever my variable name is
//get the books info to get the num of pages - key:pages
//then I need to check which one is the longest one, comparing them - placeholder >= pages 
// placeholder = pages 
//return the place holder that is the longest book



function longestBook() {
    let longestPages = 0
    let titleLongestBook = ''
    for (let girlBookShelf in bookShelf) {
        //console.log(girlsBookShelves)
        let shelves = bookShelf[girlBookShelf]
        //console.log(shelves)
        let read = shelves.finished
        //console.log(read)
        for (let title in read) {
            //console.log(title)
            let titleInfo = read[title]
            //console.log(titleInfo)
            let numOfPages = titleInfo.pages
            //console.log(numOfPages)
            if (numOfPages >= longestPages) {
                longestPages = numOfPages
                titleLongestBook = title
            }
        }
    }
    return titleLongestBook

}

//console.log(longestBook())

// 5. Write a function that returns the total number of pages that either Michelle or Valentina read

//Write Your Process Here:
//place holder for total number of pages
//Im going through both girls shelves - for loop
// Im going to find the shelf for each girl - key:wherever my variable name is 
//then Im going through their finished shelves - key:finished
//Then Im going through the titles - for loop
//then Im going through the titles info - key: wherever my variable name is
//get the books info to get the num of pages - key:pages
//then I need to 'compare' the number of pages of all the books finished - placeholder >= pages 
// 
//return the place holder that is the total of pages


function numPages(name) {
    let totalPages = 0

    let objGirlShelf = bookShelf[name]
    // console.log(objGirlShelf)
    let readBooks = objGirlShelf['finished']
    //console.log(readBooks)
    for (let titles in readBooks) {
        //console.log(titles)
        let objTitles = readBooks[titles]
        //console.log(objTitles)
        let pagesTitle = objTitles.pages
        //console.log(pagesTitle)
        totalPages = pagesTitle + totalPages
        //new totalPages = num of pages + the old num of pages (o codigo de cima)
        //console.log(totalPages)
    }
    return totalPages
}



//return totalPages

//numPages('michelle')
//console.log(numPages('valentina'))


// 6. Using the function above, write another function that returns if Michelle or Valentina read more pages 

//Write Your Process Here:
//the function above gives me the num of pages
//I'll use the function above and set a new variable
//then I compare both girls num pages 
//I make a if statemnet
//If one girl read more returns her name otherwise return the other girl name


function whoReadMore() {
    //se eu estou comparando, tenho que colocar as duas gurias
    let miTotalPages = numPages('michelle')
    let vaTotalPages = numPages('valentina')
    if (miTotalPages >= vaTotalPages) {
        return 'michelle'
    } else {
        return 'valentina'
    }
}

//console.log(whoReadMore())


// 7. Write a function that returns the longest book title:

//Write Your Process Here:
//Im going to set a place holder for longest title
//Im going through the girls shelves - for loop
//then Im going Through theirs books shelves - key wharever my variable name is
//Im going through the shelves - for loop 
//Im going through their title - key wharever my variable is
//and count how many letter there is in each title - .lenght
//and compare update my place holder with the longest one


function longestTitle() {
    let titleSize = ''

    for (girlsShelves in bookShelf) {
        //console.log(girlsShelves)
        let objShelves = bookShelf[girlsShelves]
        //console.log(objShelves)
        for (shelves in objShelves) {
            //console.log(shelves)
            let objTitles = objShelves[shelves]
            //console.log(objTitles)
            for (let titles in objTitles) {
                //console.log(titles)
                let lenghtTitle = titles.length
                //console.log(lenghtTitle)
                if (titles.length >= titleSize.length) {
                    titleSize = titles
                }
            }
        }
    }
    return titleSize
}

//console.log(longestTitle())


// 8. Write a function that returns true or false if the book with the longest title has the most pages

//Write Your Process Here:
//Im going to take the longest title - longestTitle()
//Im gonna get the title of the book with the most pages - longestBook()
//and compare the logest book to longest title book - if statemnent 


function longestComparison() {
    let title = longestTitle()
    let pages = longestBook()
    if (title === pages) {
        return true
    } else {
        return false
    }

    // return title === pages
}

//console.log(longestComparison())

// 9. Write a function that returns who read books by different authors

//Write Your Process Here:
//Im going through both shelves - for loop
//Im going through finished shelf - .finished
//Im going through each  object title
//Im going to find the name authors - .author
//then Im gonna see  if they are repeating - includes
// Im gonna compare the girls read more different authors - if statmnent
//then Im going to return the girl

function getAuthors(name) {
    let authorArr = []
    let bookShelves = bookShelf[name]
    //console.log(bookShelves)
    let readBooks = bookShelves.finished
    //console.log(readBooks)
    for (let titles in readBooks) {
        //console.log(titles)
        let objTitles = readBooks[titles]
        //console.log(objTitles)
        let authorBook = objTitles.author
        //console.log(authorBook)
        //if the array contains the author dont do anything, otherwise push it
        if (authorArr.includes(authorBook)) { }
        else {
            authorArr.push(authorBook)
        }
        // cleaner way of writing the above if statement
        // if (!authorArr.includes(authorBook)){
        //     authorArr.push(authorBook)
        // }

    }
return authorArr
}
//getAuthors('valentina')


function moreAuthors() {
    let miAuthorsArr = getAuthors('michelle')
    //console.log(miAuthorsArr)
    let vaAuthorArr = getAuthors('valentina')
    //console.log(vaAuthorArr)
    if (miAuthorsArr.length >= vaAuthorArr.length){
        return 'michelle'
    }else{
        return 'valentina'
    }
}
//console.log(moreAuthors())
//moreAuthors()

// 10. Write a function that returns Michelle or Valentina's most read genre

//Write Your Process Here:


function mostReadGenre(name) {
    let map = {}
    //here we have an empty object, that will use to store the counts of each genre
        objShelves = bookShelf[name]
        //console.log(objShelves)
            let read = objShelves.finished
            //console.log(read)
            for (let titles in read){
                //console.log(titles)
                let objTitles = read[titles]
                //console.log(objTitles)
                let bookGenre = objTitles.genre
                //console.log(bookGenre)
                if (map[bookGenre]){
                    //it checks to see if that genre, is a key in map
                    map[bookGenre]+=1
                    //If it is, it add one to the count of that genre
                }else {
                    //if it isnt it creates a key value pair, where the key is the genre, and the
                    //value is the count where starts at 1.
                    map[bookGenre] = 1
                }
            }
            let biggestCount = 0
            let maxGenre = ''
            for (let genre in map){
                //console.log(genre)
                let count = map[genre]
                //console.log(genre,'-', count)
                if (count > biggestCount){
                    biggestCount = count
                    maxGenre = genre
                }
            }
            console.log(maxGenre)
        }

mostReadGenre('michelle')