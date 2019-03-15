// Default values
// wird nach einem Parameter = WERT gestellt
// wird WERT der Wert bei Aufruf der Funktion falls die Variable fehlt!
let fn = (a, b = 3) => a == b;

console.log("Ist 3 gleich 3? ", fn(3) ? " Stimmt Kollege!" : " Nein :(" );

console.log("Ist 100 gleich 99? ", fn(100, 99) ? " Stimmt Kollege!" : " Nein :(" );