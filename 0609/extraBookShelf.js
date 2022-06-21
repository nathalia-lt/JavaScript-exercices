// Below is an object of a bookshelf split between two readers: Michelle and Valentina
// organized by books that they have finished, are currently reading, want to read, or did not finish
const bookShelf = {
    "michelle":{
        "finished":{
            "Five Little Pigs": {
                "author":"Agatha Christie",
                "genre":"mystery",
                "pages":224
            },
            "Darkfever": {
                "author":"Kara Marie Moning",
                "genre":"romance",
                "pages":224
            },
            "Dead Until Dark": {
                "author":"Charlaine Harris",
                "genre":"romance",
                "pages":292
            },

        
        },
        "reading":{
            "Moon Called": {
                "author":"Patricia Briggs",
                "genre":"romance",
                "pages":292
            },
            "The Darkest Night": {
                "author":"Gena Showalter",
                "genre":"romance",
                "pages":379
            },
    
        },
        "toRead":{
            "Clockwork Angel": {
                "author":"Cassandra Clare",
                "genre":"romance",
                "pages":479
            },
            
        },
        "didNotFinish":{
            "Young Prince": {
                "author":"Holly Black",
                "genre":"fantasy",
                "pages":370
            },

        }
    },
    "valentina":{
        "finished":{
            "Sirens of Titan": {
                "author": "Kurt Vonnegut",
                "genre": "scifi",
                "pages": 314
            },
            "Dune": {
                "author":"Frank Herbert",
                "genre":"scifi",
                "pages":658
            },
            "Dune Messiah": {
                "author":"Frank Herbert",
                "genre":"scifi",
                "pages":337
            },
            "Children of Dune": {
                "author":"Frank Herbert",
                "genre":"scifi",
                "pages":609
            },
            "Slaughterhouse-Five": {
                "author":"Kurt Vonnegut",
                "genre":"fiction",
                "pages":275
            },
        
        },
        "reading":{
            "God Emperor of Dune": {
                "author":"Frank Herbert",
                "genre":"scifi",
                "pages":587
            },
    
        },
        "toRead":{
            "Starship Troopers": {
                "author":"Robert Heinlien",
                "genre":"scifi",
                "pages":264
            },
            "Neuromancer": {
                "author":"William Gibson",
                "genre":"scifi",
                "pages":292
            },
            "Do Androids Dream of Electric Sheep?": {
                "author":"Philip K. Dick",
                "genre":"scifi",
                "pages":258
            },
        },
        "didNotFinish":{
            "Ice Planet Barbarians": {
                "author":"Ruby Dixon",
                "genre":"romance",
                "pages":188,
            }
        }
    }

}


// Exercises: 
// Before writing code, please write your process on how you would solve the problem without coding


// 1. Write a function that returns on one line the title and author of the book that Michelle did not finish

//Write Your Process Here:

function dnfLineMessage(){
    let miBookShelfDnf = bookShelf.michelle.didNotFinish
    //console.log(miBookShelfDnf)
    for (title in miBookShelfDnf){ 
        //console.log(title)
        let bookObj = miBookShelfDnf[title]
        //console.log(bookObj)
        let bookAuthor = bookObj.author
        //console.log(bookAuthor)
        // console.log(title,'-',bookAuthor)
        return title +' - '+ bookAuthor //if you want to return multiple strings on one line, then you have to add them together (+), you cant use commas
        // return [title, '-', bookAuthor].join(' ')

    }
}
//console.log(dnfLineMessage())

// 2. Write a function that returns the total number of books on the bookshelf

//Write Your Process Here:
//Im going to both girls book shelf
//I would go to their book shelves
//I would go to their obj book shelves 
//I would count all the titles
//and return its number 


function totalBooks(){
    let totalTitles = 0
    for (girlsShelves in bookShelf){
        //console.log(girlsShelves)
        let objShelves = bookShelf[girlsShelves]
        //console.log(objShelves)
    for (let shelves in objShelves){
        //console.log(shelves)
        let objTitles = objShelves[shelves]
        //console.log(objTitles)
        for (let titles in objTitles){
            //console.log(titles)
            totalTitles = totalTitles + 1
        }
    } 
    }
    return totalTitles
}
//console.log(totalBooks())

// 3. Write a function that returns the number of books that Valentina read

//Write Your Process Here:

function valBooks(){
    let numOfBooksRead = 0
    let valRead = bookShelf.valentina.finished
    //console.log(valRead)
    for (let books in valRead){
        console.log(books)
        numOfBooksRead = numOfBooksRead + 1
    }
    return numOfBooksRead
}
//console.log(valBooks())

// 4. Write a function that returns the title of the longest book that either Michelle or Valentina read

//Write Your Process Here:


function longestBook(name){
    let largestNumOfPages = 0
    let nameOfLongstBook = ''
    let girlFinishedShelf = bookShelf[name].finished
    //console.log(girlFinishedShelf)
    for (let title in girlFinishedShelf){
        //console.log(title)
        let objTitle = girlFinishedShelf[title]
        //console.log(objTitle)
        let bookPages = objTitle.pages
        //console.log(bookPages)
        if (bookPages >= largestNumOfPages){
            largestNumOfPages = bookPages
            nameOfLongstBook = title
        }
    }
    return nameOfLongstBook
}

//console.log(longestBook('valentina'))
//---------------
// 5. Write a function that returns the total number of pages that either Michelle or Valentina read

//Write Your Process Here:


function numPages(name){
    let numOfPagesRead = 0
    let girlRead = bookShelf[name].finished
    //console.log(girlRead)
    for (let bookTitle in girlRead){
        //console.log(bookTitle)
        let objTitle = girlRead[bookTitle]
        //console.log(objTitle)
        let pagesBook = objTitle.pages
        //console.log(pagesBook)
        numOfPagesRead = numOfPagesRead + pagesBook
}
return numOfPagesRead
} 

//console.log(numPages('valentina'))


// 6. Using the function above, write another function that returns if Michelle or Valentina read more pages 

//Write Your Process Here:

function whoReadMore(){
    let miPages = numPages('michelle')
    let valPages = numPages('valentina')
    if (miPages > valPages){
        return 'michelle'
    }else{
        return 'valentina'
    }
}

//console.log(whoReadMore())


// 7. Write a function that returns the longest book title:

//Write Your Process Here:

function longestTitle(){
    let theLongestTitle = ''
    for (girlsShelves in bookShelf){
        //console.log(girlsShelves)
        let objShelves = bookShelf[girlsShelves]
        //console.log(objShelves)
    for (let shelves in objShelves){
        //console.log(shelves)
        let objTitles = objShelves[shelves]
        //console.log(objTitles)
        for (let title in objTitles){
            //console.log(title)
            if (title.length > theLongestTitle.length ){
                theLongestTitle = title
            }
        }
}
}
return theLongestTitle
}

//console.log(longestTitle())


// 8. Write a function that returns true or false if the book with the longest title has the most pages

//Write Your Process Here:

function mostPageBook(){
    let numOfPagesLongstBook = 0
    for (girlsShelves in bookShelf){
        //console.log(girlsShelves)
        let objShelves = bookShelf[girlsShelves]
        //console.log(objShelves)
    for (let shelves in objShelves){
        //console.log(shelves)
        let objBook = objShelves[shelves]
        //console.log(objBook)
        for (title in objBook){
            //console.log(title)
            let objTitle = objBook[title]
            //console.log(objTitle)
            let pagesBook = objTitle.pages
                //console.log(pagesBook)
                if (pagesBook >= numOfPagesLongstBook){
                    numOfPagesLongstBook = pagesBook
                }
            }
        }
    }
    return numOfPagesLongstBook
}

//console.log(mostPageBook())


function longestComparison(){
    let bookWithTheLongestTitle = longestTitle()
    let theMostPage = mostPageBook()
    if (bookWithTheLongestTitle == theMostPage){
        return true
    }else{
        return false
    }
}

//console.log(longestComparison())

// 9. Write a function that returns who read books by more authors

//Write Your Process Here:


function authors(name){
    let uniqueAuthors = [] //tem que ser em uma array pq beceuse you can push more than one string. if it was '' you couldnt push more than one at the same time
    let girlRead = bookShelf[name].finished
    //console.log(girlRead)
    for (let bookTitle in girlRead){
        //console.log(bookTitle)
        let objTitle = girlRead[bookTitle]
        //console.log(objTitle)
        let authorBook = objTitle.author
        //console.log(authorBook)
        //I need to check if it is repeting before I add to the array
        if (!uniqueAuthors.includes(authorBook)){ //If uniqueAuthor does not include author book, than you add
            uniqueAuthors.push(authorBook)
        }
}
return uniqueAuthors

}


//console.log(authors('michelle'))

function moreAuthors(){
    let miAuthors = authors('michelle')
    let valAuthors = authors('valentina')
    //I need to count in an array, how many strings or elements in it
    if (miAuthors.length > valAuthors.length){
        return 'michelle'
    }else{
        return 'valentina'
    }
}

//console.log(moreAuthors())

// 10. Write a function that returns Michelle or Valentina's most read genre

//Write Your Process Here:
//I need an array as place holder for the genre
//I would add another place holder for num of times
//I would go to the finished self
//I would go to titles
//I would go to genre
//



function mostReadGenre(name){

}