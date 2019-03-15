let name = "Anna";
let age = 25;
let ageField = "age";

// Verschiedene Arten ein Objekt mit ES6
// aufzubauen. Dadurch, dass man Funktionen
// einen echten Namen geben lassen sind
// zum Beispiel auch Funktionsnamen mit einem
// Leerzeichen darin erlaubt.
let obj = {
  name: "Max",
  [ageField]: 28, // durch die eckigen Klammern kann man Keys und Values injizieren
  "greet me"() {
    // Funktionsname mit einem Leerzeichen im Namen
    console.log(this.name + ", " + this.age); // this bezieht sich auf die Keys im Objekt
  }
};

console.log(obj);

console.log("Alter " + obj[ageField]);

obj["greet me"]();
