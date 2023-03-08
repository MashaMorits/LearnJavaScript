function newObj() {
  this.name = 'Ragnar'
}


// newObj.prototype = {}

let obj = new newObj()

let obj2 = new obj.constructor()

alert( obj2.name ); 
alert('есди добавить newObj.prototype = {} то будет работать некорректно')