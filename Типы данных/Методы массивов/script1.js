function camelize(str) {
    let arr = str.split('-').map(( el, index ) => {
        return index == 0 ? el : el[0].toUpperCase() + el.slice(1)
    }).join('')

    return arr
}


alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))
