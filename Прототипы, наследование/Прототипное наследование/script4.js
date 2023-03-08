let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

alert('изначально у обоих объектов, наследующих свойства от hamster, нет ни stomach, ни метода eat, поэтому при вызове speedy.eat("apple") apple пушится в stomack у hamster, а у же потом обоим объектам')

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple