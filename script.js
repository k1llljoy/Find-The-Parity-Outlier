function findOutlier(arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }
  
  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}

// Test cases
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));   // Output: 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));   // Output: 160
