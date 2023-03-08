Function.prototype.defer = function(ms) {

  return function(...args) {
    console.log(args)
    setTimeout(() => f.apply(this, args), ms)
  }

}

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.