function readNumber() {

    let value

    do {
        value = prompt('Введите число')
    } while (!isFinite(value))

    if ( value === '' || value === null ) {
        return null
    } else {
        return +value
    }    
}


alert(`Вы ввели число ${readNumber()}`)