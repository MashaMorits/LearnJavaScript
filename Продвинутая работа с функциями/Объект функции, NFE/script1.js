function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.set = (value) => count = value

    counter.decrease = () => --count

    counter.count = 0;

    return counter;
}

let counter = makeCounter();






alert( counter() ); // 0
alert( counter() ); // 1

alert(counter.set(7))
alert(counter.decrease())

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.