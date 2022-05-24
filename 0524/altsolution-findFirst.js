function findFirstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    let res = arr.indexOf(val) 
    if (res !== i) {
      return val
    }
  }
  return -1
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// I need to go through the array and find the first duplicate number and return.
// 1. Im going to all of the index in the array (one by one)
// 2.Im gonna check which indexes has the same value.
// 3.Im gonna pick the first index that has value that already appear
// 4.If there isnt no duplicates, it returns negative one. 