let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  // TODO - Your code here (1 line)
  //  let newArr =[];
  //    newArr.push(arr.filter(i=> i %2==0));

  return arr.filter(i=> i %2 ==0)
  
  // return newArr;
}

// Function to map array elements to their squared values
// You need to use the array.map() function

function squareNumbers(arr) {
  //  TODO - Your code here (1 line)

  return arr.map(i=> i= i*i);
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  //  TODO - Your code here (1 line)

const sum = arr.reduce((first, second )=>{
   return first+ second;
},0)
return sum;
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
