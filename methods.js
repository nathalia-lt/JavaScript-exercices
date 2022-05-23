// EVERY
// arr.every(fn) -> returns true if every element in the array satisfies the given condition
//EXAMPLE:
// When given an array of integers, return true if every element in the array is divisble by 2
let nums = [1, 2, 3, 4];
let filteredNums = nums.filter(num => num % 2 === 0); // -> [2,4]
if (filteredNums.length === nums.length) {
    console.log(true);
}
let mappedNums = nums.map(num => (num % 2 === 0)); // -> [false,true,false,true]
function filteredNumsFunction(arr) {
    let filteredArr = arr.filter(num => num % 2 === 0);
    if (filteredArr.length === arr.length)
        return true;
    else
        return false;
}
function mappedNumsFunction(arr) {
    let mappedArr = arr.map(num => (num % 2 === 0) === true);
    for (let item of mappedArr) {
        if (item === false)
            return false;
    }
    return true;
}
console.log('Nums -> [1,2,3,4]');
console.log('Using .filter() function -> ', filteredNumsFunction(nums));
console.log('Using .map() function -> ', mappedNumsFunction(nums));
let nums2 = nums.map(num => num * 2);
console.log('Nums2 -> [2,4,6,8]');
console.log('Using .filter() function -> ', filteredNumsFunction(nums2));
console.log('Using .map() function -> ', mappedNumsFunction(nums2));
console.log(' ');
// Too much work!
// Do this instead ->
console.log('Using .every() -> ');
console.log('Nums -> [1,2,3,4]');
console.log(nums.every(num => num % 2 === 0));
console.log('Nums2 -> [2,4,6,8]');
console.log(nums2.every(num => num % 2 === 0));