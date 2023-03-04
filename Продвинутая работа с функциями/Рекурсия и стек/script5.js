function reversePrint(obj) {

    if (obj.next) {        
        reversePrint(obj.next)
    }

    alert(obj.value)

}


function reversePrint(obj) {

    let valuesArr = []
    let el = obj
    while ( el ) {
        valuesArr.push(el.value)
        el = el.next
    }

    for ( let i = valuesArr.length - 1; i >= 0; i-- ) {
        alert(valuesArr[i])
    }

}


let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};



reversePrint(list1)

alert('если список большой, то быстрее будет работать цикл')