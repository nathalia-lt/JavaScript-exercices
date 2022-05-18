"use strict";
// Objects
// allow you to store key - value pairs
// "key": value
let meals = {
    "breakfast": 'Bacon',
    "lunch": "Hamburger",
    "dinner": "Salmon"
};
// meals["breakfast"] -> "Bacon"
// DOESNT WORK: objects dont have indices
// meals[i]
// for (let i=0; i <meals.length; i++){
// }

// Use Object.keys(obj) to get the keys of an object in order to get the keys of the object and be able to iterate through them
let mealsKey = Object.keys(meals);
console.log(mealsKey);

for (let meal of mealsKey){
    console.log(meal)
}

// Use Object.values(obj) to get the keys of an object in order to get the keys of the object and be able to iterate through them
let mealsvalue = Object.values(meals);
console.log(mealsvalue);

for (let meal of mealsvalue){
    console.log(meal)
}

// you can also use for in loops to iterate through the keys of an object
for (let meal in meals){
    console.log(meal)
    // can also iterate through values 
    console.log(meals[meal])
}

// updating the values of an object
meals['breakfast'] = 'Eggs'

//adding a new key:value pair:
meals['midnight-snack'] = 'Oatmeal'