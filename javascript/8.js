//REST Operator
let numbers = [1, 2, 3, 4, 5, 6, 7];

function sumUp(toAdd) {
  let result = 0;

  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }

  return result;
}

const erg = sumUp(numbers);

console.log("Summe1: ", erg);

//Better way to do..
let sumUp2 = (...toAdd) => {
  console.log("Übergebenes Array: " + toAdd);
  let erg = 0;

  for (let i = 0; i < toAdd.length; i++) {
    erg += toAdd[i];
  }

  return erg;
};

console.log("Summe2: ", sumUp2(100, 20, 300));
