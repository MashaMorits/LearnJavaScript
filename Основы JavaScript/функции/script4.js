"use strict"

const x = prompt('Введите целое положительное число x')
const n = prompt('Введите целое положительное число n')

function pow(x, n) {
    if( Number.isInteger(+x) && Number.isInteger(+n) && n > 0 && x > 0) {
        return Math.pow(x, n)
    } else {
       return 'Неверно введены данные'
    }

}

pow(x, n)
    
alert(pow(x, n))