const prompt = require("prompt-sync")();

function getArray() {
  let arr = [];
  let k = prompt("Enter the size of the Array: ");
  for (let i = 0; i < k; i++) {
    let element = prompt("Enter element " + (i + 1) + ":");
    element = parseInt(element);
    arr.push(element);
  }
  console.log(arr);
  return arr;
}

function findFrequency(arr, n) {
  let frequency = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (frequency[i] === -1) {
      continue;
    }
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
        frequency[j] = -1;
      }
    }
    frequency[i] = count;
  }

  let maxFrequency = 0;
  let mostFrequentElement = arr[0]; 
  console.log("Element\tFrequency");
  for (let i = 0; i < n; i++) {
    if (frequency[i] !== -1) {
      console.log(arr[i] + "\t" + frequency[i]);
      if (frequency[i] > maxFrequency) {
        maxFrequency = frequency[i];
        mostFrequentElement = arr[i];
      }
    }
  }
  
  console.log("Most frequent element: " + mostFrequentElement + " (Frequency: " + maxFrequency + ")");
}

let array = getArray();
let size = array.length;
findFrequency(array, size);
