//Erklärung this
//Objekt Domi mit einer Funktion der Ausgabe des Namens
var Domi = {
   printVorname: function() {
      console.log('Mein Name ist Dominik');
      console.log(this === Domi); //this ist dieses Mal wahr
   }
};

//this bezieht sich in dieser Funktion auf das Objekt Domi
Domi.printVorname();

function tuEtwasWertloses() {
   console.log('Ich bin wertlos!');

   //this ist dieses Mal nicht wahr
   console.log(this === Domi);

   //this ist global da es eine anonyme Funktion im globalen Kontext ist
   console.log(this === global);
}

tuEtwasWertloses(); //this bezieht sich hier auf global und nicht Domi
