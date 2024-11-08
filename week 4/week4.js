    /* Create an array with the given sequence of numbers
const numbers = [8, 9, 8, 5, 7, 5, 8, 8, 5, 0, 4, 3];

// Count the occurrences of the number 5
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    count++;
  }
}

// Output the result to the console
console.log("The number 5 appears " + count + " times in the array.");

// Optional challenge: find the number that appears most often
let mostFrequentNumber = null;
let mostFrequentCount = 0;

for (let i = 0; i < numbers.length; i++) {  
  let currentCount = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      currentCount++;
    }
  }
  if (currentCount > mostFrequentCount) {
    mostFrequentNumber = numbers[i];
    mostFrequentCount = currentCount;
  }
}

console.log("The most frequent number is " + mostFrequentNumber + " with " + mostFrequentCount + " occurrences.");
*/