function printList(list) {

    alert(list.value)
    if ( list.next ) printList(list.next)    

}

function printList(list) {

    
    alert(list.value)
    let el = list.next
    while ( el ) {
        alert(el.value)
        el = el.next
    }

}


let list = {
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

printList(list)