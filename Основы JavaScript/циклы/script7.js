const num = prompt('Введите натуральное число, в диапазоне до которого выведутся все простые числа')

function simple(num) {

    let result = []
    let res

    for (let i = 2; i <= num; i++) {

        let isSimple = false

        for (let j = 2; j < i; j++) {

            if (i % j == 0) {

                isSimple = false
                break

            } else {

                isSimple = true
                res = i
                
            }
        }
        

        isSimple && result.push(res)
    }


    alert(result.join(', '))
}

simple(num)