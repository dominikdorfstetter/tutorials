//Simuliere Bestellablauf
function placeOrder(orderNumber) {
   console.log('Customer order ', orderNumber);

   cookAndDeliverFood(function() {
      console.log('Delivered food order: ', orderNumber);
   });
}

//Simuliere einen 3 Sekunden andauernden Prozess
function cookAndDeliverFood(callback) {
   setTimeout(callback, 3000); //warte drei Sekunden dann callback
}

//Simulation Aufträge
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
