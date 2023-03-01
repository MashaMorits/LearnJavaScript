vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) )

function getAverageAge(arr) {
    let age = 0
    arr.forEach(el => {
       age += el.age
    })

    return age/arr.length
}