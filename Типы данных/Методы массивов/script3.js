function filterRangeInPlace(arr, a, b) {
  arr.forEach((el, index) => {
    ( el < a || el > b ) && arr.splice( index, 1 )
  })
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]