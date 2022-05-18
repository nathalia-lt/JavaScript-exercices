// If given an array, return an array that contains all of the even values of that array
// EX 1:
// INPUT: [1,2,3,4]
// OUTPUT: [2,4]
// EX 2: 
// INPUT: [1,3,5,7]
// OUTPUT: []
// EX 3: 
// INPUT: [2,4,6,8,10]
// OUTPUT: [2,4,6,8,10]
function findEvens(nums) {
    const evens = []
    nums.map(num=>{
        if (num % 2 == 0){evens.push(num)}  //if the remaider is equals to 0 it means that it is even, ai eu tenho que fazer um looping para verificar 
        //numero por numero
    })
    return evens


}
// Run 'node findEvens.js' in order to run these tests
console.log('EXAMPLE 1:');
var ans1 = [2, 4];
console.log('EXPECTED: ', ans1);
console.log('ACTUAL: ', findEvens([1, 2, 3, 4]));
console.log(' ');
console.log('EXAMPLE 2:');
var ans2 = [];
console.log('EXPECTED: ', ans2);
console.log('ACTUAL: ', findEvens([1, 3, 5, 7]));
console.log(' ');
console.log('EXAMPLE 3:');
var ans3 = [2, 4, 6, 8, 10];
console.log('EXPECTED: ', ans3);
console.log('ACTUAL: ', findEvens([2, 4, 6, 8, 10]));

