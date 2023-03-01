let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr2 = [ vasya2, petya2, masha2 ];

sortByAge(arr2);

// теперь: [vasya, masha, petya]
alert(arr2[0].name); // Вася
alert(arr2[1].name); // Маша
alert(arr2[2].name); // Петя

function sortByAge(users) {
    arr2.sort((a, b) => ( a.age > b.age ) ? 1 : -1)
}