let vasya1 = {
    name: "Вася",
    surname: "Пупкин",
    id: 1
};
let petya1 = {
    name: "Петя",
    surname: "Иванов",
    id: 2
};
let masha1 = {
    name: "Маша",
    surname: "Петрова",
    id: 3
};

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map(item => {
    return {
        fullName: item.name + ' ' + item.surname,
        id: item.id
    }
})

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин