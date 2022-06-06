// Methods inside of Obects

const person = {
    firstName: "John",
    'last Name' : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    children: {
        "Alex": {
            fullName: "Alexandra",
            age : 10,
            favoriteColor: "Orange"
        },
        "Pete": {
            fullName: "Peter",
            age : 12,
            favoriteColor: "Yellow"
        }
    }
  };

// if an object has a function inside of it, you can call to like this:
// keys are strings
//person.fullName()
//console.log(person.fullName())


// the "this" inside of the function allows for the computer to reference whatever the function is being called on 

//1.console log persons first name

//console.log(person['firstName'])
//console.log(person.firstName)

//2.console log persons last name

//console.log(person['last Name'])

//3. console log the full name without using the builting function

//console.log(person['firstName']  + " "+ person['last Name'])

//4. console log children

//console.log(person.children)

//5. console log the obj of Alex

//console.log(person['children']['Alex'])

//6.Get the full name of Alex

//console.log(person.children['Alex']['fullName'])
//console.log(person.children.Alex.fullName)

//7. Get the age of Alex

//console.log(person.children['Alex']['age'])

//8. Get the fullname and age of Alex

//console.log(person.children['Alex']['fullName'] + ' is ' + person.children['Alex']['age'] + ' years old ')

//console.log(person.children.Alex.fullName)

//9. console log Alex and Pete

// for (let child in person.children){
//     console.log(child)
//     console.log(person.children[child])
// }

//10. In a for loop to console log both child full name

// for (let child in person.children){
//     console.log(child)
//     console.log(person.children[child]['fullName'])

// }

//11. Console logthe information messagem about both children.

// for (let child in person.children){
//     console.log(child)
//     console.log(person.children[child]['fullName'] + ' is ' + person.children[child]['age'] + ' years old')
// }

//12. console log an array that contem both children favorite color.


// let arrColors = []
// //I need to put the place holder outside of the loop to not overwritting, e assim formar uma array com both color e not just one each time.
// for (let child in person.children){
//     console.log(child)
//     arrColors.push(person.children[child]['favoriteColor'])
//     console.log(arrColors)
// }

//13. update Pete favorites color

// person.children.Pete.favoriteColor = 'Green'

// console.log(person.children.Pete.favoriteColor)

//14. Give Pete a favortite Pet

//person.children.Pete.favoritePet = 'Duck'

//console.log(person.children.Pete.favoritePet)

//console.log(person.children.Pete)

// 15. childres favorite color whose name is Pete

for (let child in person.children){
    console.log(child)
    if ( child === 'Pete'){
        console.log(person.children[child].favoriteColor)
    }
}

