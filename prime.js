const prompt = require("prompt-sync")();
function getArray() {
  var arr = [];
  let k = prompt(" Enter the size of the Array: ");
  for (var i = 0; i < k; i++) {
    let element = prompt("Enter element " + (i + 1) + ":");
    element = parseInt(element);
    arr.push(element);
  }
  console.log(arr);
  return arr;
}

function isPrime(input) {
  if (input <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}

let array = getArray();
let c = array[0];
console.log(isPrime(c) ? "is Prime Number" : "Not a Prime number");
