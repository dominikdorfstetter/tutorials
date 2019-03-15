//Erklärung prototyping
class User {
   constructor(name) {
      this.name = name;
      this.life = 30;
   }

   giveLife(targetPlayer) {
      targetPlayer.life += 1;
      this.life -= 1;
      console.log(this.name + ' hat 1 Leben an ' + targetPlayer.name + ' gegeben.');
   }
}

var Dominik = new User('Dominik');
var Stefan = new User('Stefan');

//Funktion der Klasse User
Dominik.giveLife(Stefan);

console.log('Leben Dominik: ', Dominik.life);
console.log('Leben Stefan: ', Stefan.life);

//man kann Objekten im Nachhinein Funktionen zuweisen
User.prototype.schlagen = function(targetPlayer) {
   targetPlayer.life -= 5;
   console.log(
      this.name + ' hat gerade ' + targetPlayer.name + ' geschlagen. ' + targetPlayer.name + "'s Leben ist nun bei: " + targetPlayer.life
   );
};

Dominik.schlagen(Stefan);

//man kann Objekten im Nachhinein Attribute zuweisen
User.prototype.magic = 10;

console.log("Dominik's Magie: ", Dominik.magic);
