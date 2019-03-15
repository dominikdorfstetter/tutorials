// Klassische JS Funktion
function fn() {
  console.log("test");
}

fn();

// Mit Arrow-Functions können wir anstelle
// der functionsdeklaration eine Variablen
// Zuweisung vornehmen
const fn2 = (a, b) => {
  console.log(a + b);
};

fn2(6, 4);
fn2(7, 8);

// Sofern die Länge der Funktion nicht mehr
// als eine Zeile überschreitet kann auch auf
// die geschwungenen Klammern verzichtet werden
// Beachte, dass man sich auch das return sparen kann
// Das Ergebnis der Berechnung wird so zurücgeliefert
const fn3 = (a, b) => a + b;

console.log("Ergebnis 2 + 2 = ", fn3(2, 2));

// Hat meine Funktion nur ein EINZIGES Argument lässt
// es sich nochmal einsparen! Die geschwungenen Klammern fallen weg.
// Hier soll das übergebene Argument mit 5 addiert werden
const fn4 = a => a + 5;

console.log("8 + 5 = " + fn4(8));

//Kann beispielsweise bei Funktionsaufrufen verwendet werden
console.log("Warte nen Moment..");
setTimeout(() => console.log("Hab dir 5 Sekunden Lebenszeit gestohlen ;)"), 5000);

