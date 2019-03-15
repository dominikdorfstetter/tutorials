// Stefan echt cooler shit
// DESTRUCTURING
let numbers = [1, 2, 3];

// Variablen können in ein Array gepackt werden
// und ihnen kann dann ebenfalls ein Array zugewiesen
// werden. Sind zu wenig Variablen vorhanden,
// wird der Überschuss einfach ignoriert.
let [a, b] = numbers;

console.log('a: ', a);
console.log('b: ', b);

let [c, d, e, f] = numbers;

// Ist das Array zu klein für alle Variablen im Array
// sind die Überschüssigen 'undefined'
console.log('f: ', f);

// Durch den Slice-Parameter kommt der Überschuss als Array zurück
let [g, ...h] = numbers;

console.log('h: ', h);

// Wird ein = WERT angegeben ist das der default Value einer Variablen
let [i = 'blah', j, k, l = 'default'] = numbers;

// hat default
console.log('i: ', i);
// hat keinen
console.log('l: ', l);

let var1 = 1;
let var2 = 2;

// Da drehst dich im Grab um
[var1, var2] = [var2, var1];

// var1 wurde mit var2 vertauscht in einer Zeile
console.log(`var1 ${var1} var2 ${var2}`);

// Ein Leerzeichen anstelle einer Variablen lässt einen Wert im Array aus
let [var3, , var4] = numbers;

console.log(`var3 ${var3} var4 ${var4}`);

// Weg um bei der Variablen Erstellung Zeit zu sparen!
let [name, alter, adresse] = ['Dominik', 28, 'Meidling'];

console.log(`
Hallo ich bin ${name} und bin ${alter} Jahre alt,
wenn du wissen willst wo ich herkomme dann bekommst du 
als Antwort: ${adresse}
`);

// Halt dich fest ;D Das selbe geht mit Objekten
let obj = {
   gametag: 'Oliver420',
   level: 26,
   gameOfLife: () => {
      console.log(`
Das Game das mir die Zeit raubt: 
------ League of Legends -------
        `);
   }
};

// Dann brauchst du eine geschwungene Klammer
// Die Variablen müssen aber exakt so heißen,
// wie die Felder im Objekt. Man kann auch Funktionen
// übergeben
let { gametag, level, gameOfLife } = obj;

console.log(`
Hallo ich bin ${gametag} und bin Level ${level}.
`);

// Rufen ganz casual unsere übergebene Funktion auf
gameOfLife();
