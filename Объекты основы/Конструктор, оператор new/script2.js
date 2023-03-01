"use strict"


function Calculator() {
  this.read = () => {
    this.y = +prompt('Введите первое число')
    this.x = +prompt('Введите второе число')
  }

  this.sum = () => {
    return this.x + this.y
  }

  this.mul = () => {
    return this.x * this.y
  }
}



let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );