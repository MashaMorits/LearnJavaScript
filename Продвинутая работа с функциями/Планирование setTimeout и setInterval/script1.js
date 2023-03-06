function printNumbers(from, to) {

    let timerId = setInterval(function () {
        alert(from)
        if (from == to) {
            clearInterval(timerId)
        }
        from++
        
    }, 1000)

}



function printNumbers(from, to) {


    let timerId = setTimeout(function tick() {
        alert(from++)

        if (from <= to) {
            timerId = setTimeout(tick(), 1000)
        }        
       
    }, 1000)
    
}


printNumbers(5, 10)