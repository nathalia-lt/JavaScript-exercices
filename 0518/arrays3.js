// PUSH 
// .push -> adds the specified element to the end of the array
// changes the original array
// returns the new length of the array

let colorArray = ['Blue', 'White', 'Red']
let pushArray = colorArray.push('Green')

console.log('PUSH: ', colorArray, pushArray)


//POP
// .pop -> removes the last element of an array
// changes the original array 
// returns the removed element 

let popArray = colorArray.pop()

console.log('POP: ', colorArray, popArray)



//UNSHIFT
// .unshift -> adds an element to the front of the array
// changes the original array
// returns the new array length 

let unShiftArray = colorArray.unshift('Green')

console.log('UNSHIFT: ', colorArray, unShiftArray)



//SHIFT
// .shift -> removes the first element of an array
// changes the original array
// returns the removed element

let shiftArray = colorArray.shift()

console.log('SHIFT: ', colorArray, shiftArray)


// SPLICE
// .splice(index,length) -> removes length of elements in the array starting at the specified index
// changes the original array (its a destructive method)
// returns an array of the removed items

let numArray = [1,2,3,4,5]
let spliceArray = numArray.splice(1,3)
console.log('SPLICE: ', numArray, spliceArray)


// you can also use splice to add items to the array 
// .splice(index,length, item1,...,itemX)
//.splice(o primeiro numero e onde comeca, o segundo numero e o comprimento(ou quantos numeros vc quer 'alterar/deletar') e o resto
//e o que voce quer substituir da onde foi tirado, caso vc queira substituir, se nao, so precisa o primeiro e segundo numero)

let spliceArray2 = numArray.splice(1,0,2)

console.log('SPLICE 2: ', numArray, spliceArray2)

// You can also directly replace items with splicing
// it will replace the items that you took out with everything that comes after the specified length of items to take out

let spliceArray3 = numArray.splice(1,3,6,7,'8')
console.log('SPLICE: ', numArray, spliceArray3)


//SLICE
// .slice(start,end) -> returns the selected elements in an array as a new array
// does not change the original array (Non destructive)

numArray = [1,2,3,4,5]
let sliceArray = numArray.slice(1,3)

console.log('SLICE :', numArray, sliceArray)


//GETTING THE END OF AN ARRAY
// if you want to leave out part of the beginning of an array

// Option 1:
// if we don't put anything in the second parameter, you will return everything from the start index to the end of the array
let sliceArray2 = numArrayslice(2,)
console.log('SLICE 2: ', sliceArray2)

// Option2:
// you find the length of the array and subtract 1 to account for indices starting at 0
let lenOfArray = numArray.length()
let sliceArray3 = numArrayslice(2,lenOfArray)
console.log('SLICE 3: ', sliceArray3)

// NEGATIVE INDICES:
// arrays have negative indices that allow you to iterate from the last element in the array
// starting with -1 

let sliceArray4 = numArray.slice(-3,-2)

console.log('SLICE 4:', numArray,sliceArray4)