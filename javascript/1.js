// Unterschied zwischen let und var
// JS produziert absichtlich Fehler, bitte bis zum Ende durchlesen
// var ist immer gültig, das heißt im Speicher offener
if (true) {
  var a = 12;
}

console.log("a: ", a);

// Const kann nachträglich nicht mehr verändert werden!
// Versuchst du es erzeugt es einen Fehler!
const d = "fixer Wert";

console.log("d: ", d);

// Ein konstantes Objekt zeigt nur auf den Speicherbereich
const obj = {
  name: "Dominik"
};

console.log(obj);

// Hier wird nicht der Wert verändert, sondern der Speicherbereich
// geändert. Name zeigt auf einen Speicherbereich in dem "Oliver" steht
obj.name = "Oliver";

console.log(obj);

// Let ist nur im Scope gültig, würde bedeuten hier im if
// produziert Fehler!
if (true) {
  let c = 13;
  console.log("c: ", c);
}

// Let ist nur im Scope gültig, würde bedeuten hier im if, zwischen
// den geschwungenen Klammern. Außerhalb ist die Variable unbekannt
// Dieser Code produziert Fehler!
if (true) {
  let b = 13;
}
console.log("b", b);
