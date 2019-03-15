//Spread Operator
let numbers = [1, 2, 3, 4, 5, 6];

// Math.max erwartet sich eigentlich eine Liste
// durch drei voran gestellte Punkte wird ein Array
// automatisch in eine Liste umgewandelt
// War davor eher aufwendig
console.log(Math.max(...numbers));

// ... ist im Prinzip eine Funktion die über das Array
// looped. Funktioniert mit allen Arrays.
console.log("Array als Liste: ", ...numbers);