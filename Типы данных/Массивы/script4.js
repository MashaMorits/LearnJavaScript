function sumInput() {
    let value
    let sum = 0

    do {
        value = prompt('Введите число')
        sum += +value
        console.log(value)
    } while ( isFinite(value) && value !== null && value !== ""  )


    alert(`Сумма чисел равна ${sum}`)
}

sumInput()