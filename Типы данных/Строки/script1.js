function ucFirst(str) {
    return (str.length) ? str[0].toUpperCase() + str.slice(1) : 'Пустая строка'
}


alert(ucFirst("вася")) 
alert(ucFirst("")) 