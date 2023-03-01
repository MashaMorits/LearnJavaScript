let map = new Map();

map.set("name", "John");

let keys = map.keys();

let keysArr = Array.from(map.keys())
keysArr.push("more");

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция

console.log(keysArr)

alert('метод map.keys() не возвращает массив, поэтому мы в него не можем ничего пушить, для корректной работы кода нужно создать массив ключей Array.from(map.keys())')