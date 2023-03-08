function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();


alert( 'Rabbit.prototype = {}; rabbit.eats  = true' ); // ?
alert('Rabbit.prototype.eats = false; rabbit.eats  = false')
alert(' delete rabbit.eats; rabbit.eats  = true')
alert('delete Rabbit.prototype.eats; rabbit.eats  = underfind')