const mealPlan = {
    "monday":{
        "breakfast":{
            "drink":"orange juice",
            "main":"pancakes",
            "side":"apple slices"
        },
        "lunch":{
            "drink":"gatorade",
            "main":"BLT",
            "side":"potato chips"
        },
        "dinner":{
            "drink":"red wine",
            "main":"steak",
            "side":"asparagus"
        }
    },
    "tuesday":{
        "breakfast":{
            "drink":"milk",
            "main":"scrambled Eggs",
            "side":"hashbrowns"
        },
        "lunch":{
            "drink":"lemonade",
            "main":"peanut butter and jelly",
            "side":"carrots"
        },
        "dinner":{
            "drink":"water",
            "main":"chicken and rice",
            "side":"broccoli"
        }
    },
    "wednesday":{
        "breakfast":{
            "drink":"orange juice",
            "main":"ceral",
            "side":"protein bar"
        },
        "lunch":{
            "drink":"apple juice",
            "main":"hamburger",
            "side":"fries"
        },
        "dinner":{
            "drink":"coca cola",
            "main":"spaghetti",
            "side":"ciabatta"
        }
    },
    "thursday":{
        "breakfast":{
            "drink":"water",
            "main":"yogurt",
            "side":"granola"
        },
        "lunch":{
            "drink":"orange juice",
            "main":"ham sandwhich",
            "side":"potato chips"
        },
        "dinner":{
            "drink":"red wine",
            "main":"chicken and rice",
            "side":"beans"
        }
    },
    "friday":{
        "breakfast":{
            "drink":"chocolate milk",
            "main":"sausage links",
            "side":"oatmeal"
        },
        "lunch":{
            "drink":"water",
            "main":"chicken breast",
            "side":"salad"
        },
        "dinner":{
            "drink":"stout ipa",
            "main":"pizza",
            "side":"garlic bread"
        }
    },
    "saturday":{
        "breakfast":{
            "drink":"Orange Juice",
            "main":"pancakes",
            "side":"yogurt"
        },
        "lunch":{
            "drink":"gatorade",
            "main":"pizza",
            "side":"carrots"
        },
        "dinner":{
            "drink":"red wine",
            "main":"clam chowder",
            "side":"sour dough bread"
        }
    },
    "sunday":{
        "breakfast":{
            "drink":"orange Juice",
            "main":"sausage links",
            "side":"granola"
        },
        "lunch":{
            "drink":"apple juice",
            "main":"barbeque ribs",
            "side":"cornbread"
        },
        "dinner":{
            "drink":"red wine",
            "main":"chicken and rice",
            "side":"beans"
        }
    },
}

// Challenges:

// 1. Console log the meal plan for thursday

    //console.log(mealPlan['thursday'])

// 2. Console log the meal for breakfast on monday

    //let mondayMeal = mealPlan['monday']['breakfast']
    //the keys are on descending layer, that is why I can find the results like this
    //console.log(mondayMeal)


// 3. Console log the drink for dinner on sunday

// let sundayMeal = mealPlan['sunday']
//     let sundayDinner = sundayMeal['dinner']['drink']
//     console.log(sundayDinner)

// 4. Console log every days lunch

    // for (let daysWeekMeal in mealPlan){
    //     console.log(daysWeekMeal)
    //     let mealOfDay = mealPlan[daysWeekMeal]
    //     let everyDayLunch = mealOfDay['lunch']
    //     console.log(everyDayLunch)
    // }

// 5. Console log every days drink for dinner 

    // for (let daysWeekMeal in mealPlan){
    //     //console.log(daysWeekMeal)
    //     let mealOfDay = mealPlan[daysWeekMeal]
    //     //console.log(mealOfDay)
    //     let everyDayDinner = mealOfDay['dinner']
    //     //console.log(everyDayDinner)
    //     let everyDayDrink = everyDayDinner['drink']
    //     console.log(everyDayDrink)
    // }

// 6. On what day is a "peanut butter and jelly" had for lunch?

    // for (let daysWeekMeal in mealPlan){
    //     let mealOfDay = mealPlan[daysWeekMeal]
    //     let everyDayLunch = mealOfDay['lunch']['main']
    //     //console.log(everyDayLunch)
    //     if (everyDayLunch === 'peanut butter and jelly'){
    //         console.log(daysWeekMeal)
    //     }
    // }
    
// 7. Console log all of the breakfast meals in an array

    // let breakfastArr = []
    // for (let daysWeekMeal in mealPlan){
    //     //     console.log(daysWeekMeal)
    //         let mealOfDay = mealPlan[daysWeekMeal]
    //         let everyDayBreakfast = mealOfDay['breakfast']
    //         //console.log(everyDayBreakfast)
    //         breakfastArr.push(everyDayBreakfast)
    // }
    // console.log(breakfastArr)

// 8. Console log an array that contains all of the days that red wine is had for a drink at dinnner

// let redWineDays = []
// for (let daysWeekMeal in mealPlan){
//         let mealOfDay = mealPlan[daysWeekMeal]
//         //console.log(mealOfDay)
//         let everyDayDinnerDrink = mealOfDay['dinner']['drink']
//         //console.log(everyDayDinnerDrink)
//         if (everyDayDinnerDrink === 'red wine'){
//             redWineDays.push(daysWeekMeal)
//         }
//     }
// console.log(redWineDays)

// 9. Count the number of times chicken and rice is had for dinner

let numberOfTimes = 0

for (let daysWeekMeal in mealPlan){
        let mealOfDay = mealPlan[daysWeekMeal]
        let everyDayDinner = mealOfDay['dinner']['main']
        //console.log(everyDayDinner)
        if (everyDayDinner === 'chicken and rice'){
            // numberOfTimes+=1 // numberOfTimes = numberOfTimes +1
            numberOfTimes++
        }
    }
    //console.log(numberOfTimes)

// 10. Count the total number of unique main courses for lunch

let uniqueMeals = []

for (let daysWeekMeal in mealPlan){
    let mealOfDay = mealPlan[daysWeekMeal]
    let everyDayLunch = mealOfDay['lunch']['main']
    //console.log(everyDayLunch)
    if (uniqueMeals.includes(everyDayLunch)){

    }
    else uniqueMeals.push(everyDayLunch)
}
//uniqueMeals is an array of strings
console.log(uniqueMeals.length)