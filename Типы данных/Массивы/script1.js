let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( 'fruits.length выведет 4, shoppingCart и fruits ссылаются на один массив, в который добавлен "Банан"' ); 