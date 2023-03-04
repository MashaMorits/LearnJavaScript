function sumTo(n) {

    let i = n
    let sum = 0

    while (i >= 1) {
        sum += i
        i--
    }

    return sum
}


function sumTo(n) {

    let sum = n

    if (n === 1) return n
    else {
        return sum += sumTo(n - 1)
    }

}


function sumTo(n) {

    return n * (n + 1) / 2

}

alert(sumTo(100))