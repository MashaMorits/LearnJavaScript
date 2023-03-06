let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}


alert('результатом вызова sayHi() будет ошибка, т.к. эта функция объявлена внутри цикла и за его пределами недоступна')