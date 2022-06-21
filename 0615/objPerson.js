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


// the "this" inside of the function allows for the computer to reference whatever the function is being called on 

//1.console log persons first name
//console.log(person.firstName)

//2.console log persons last name
//console.log(person["last Name"])
//if you have a key with a space you have to use square bracket

//3. console log the full name without using the builtin function
//console.log(person.firstName, '', person['last Name'])


//4. console log children
//console.log(person.children)


//5. console log the obj of Alex
//console.log(person.children.Alex)



//6.Get the full name of Alex
//console.log(person.children.Alex.fullName)

//7. Get the age of Alex
console.log(person.children.Alex.age)



//8. Get the fullname and age of Alex in a one line message like 'Alexandra is 10 years old.'


//9. console log Alex and Pete

//10. In a for loop to console log both child full name

//11. Console logthe information messagem about both children.

//12. console log an array that contem both children favorite color.

//13. update Pete favorites color

//14. Give Pete a favortite Pet

// 15. childres favorite color whose name is Pete


