//  let condition = 5 > 0 // -> true
//  let condition2 = 0 === '0' // -> false
//  if (condition && condition2) {
//     console.log('Bacon egg cheese')
//  } else {
//      console.log('Nothing')
//  }


 // && AND -> requires all conditions to be true
 //  OR -> requires atleast one condition to be true


 // ! -> makes the boolean conditional into its opposite value 
 
 let trueVar = true
 // !truevar -> false

 let nums = [1,2,3,4,5,6]
 let evens = [2,4,6]

 for (let num of nums){
     if (evens.includes(num)  num % 5 === 0 ){
         console.log(num)
     }

     if (!evens.includes(num)){
         console.log('Odd')
     }
 }
 // this will console log all of the evens and the number 5