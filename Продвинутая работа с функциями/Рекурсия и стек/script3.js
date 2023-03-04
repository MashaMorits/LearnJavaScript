function fib(n) {

    let fibArr = [ 1, 1 ]
   
    for ( let i = 2; i <= n; i++ ) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2]
    }

    return fibArr[n-1]
}

alert('рекурсию в данном случае для чисел Фибоначчи использовать не стоит, т.к. скорость выполнения для больших значений будет низкой')

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757