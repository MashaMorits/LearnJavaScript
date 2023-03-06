function inBetween(a, b) {
    return (el) => a <= el && el <= b
}

function inArray(arr) {
    return (el) => arr.includes(el)
}


let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2