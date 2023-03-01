function filterRange(arr, a, b) {
    let newArr = arr.filter( el => el >= a && el <= b)
    return newArr
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4)





alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)