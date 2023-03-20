function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(' a instanceof B == true, т.к. a наследует от A, прототип которого равен прототипу B '); // true