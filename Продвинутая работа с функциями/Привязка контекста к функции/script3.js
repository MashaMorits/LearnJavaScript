function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log('sayHi', sayHi.test)
console.log('bound', bound.name)

alert('alert(bound.test); = underfind, т.к. у bound нет свойства test')