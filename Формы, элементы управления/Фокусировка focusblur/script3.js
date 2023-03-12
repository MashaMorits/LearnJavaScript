mouse.tabIndex = 0
let coord

function mouseMotion ( direction, step ) {
    console.log(direction)
    coord = mouse.getBoundingClientRect()

    if ( direction === "ArrowUp" ) {
        console.log('safaf')
        mouse.style.top = coord.top - step + 'px'
    } else if ( direction == "ArrowDown" ) {
        mouse.style.top = coord.top + step + 'px'
    } else if ( direction == "ArrowRight" ) {
        mouse.style.left = coord.left + step + 'px'
    } else if ( direction == "ArrowLeft" ) {
        mouse.style.left = coord.left - step + 'px'
    } 

}

mouse.onclick = function() {
    coord = mouse.getBoundingClientRect()
    mouse.focus()
    mouse.style.top = coord.top + 'px'
    mouse.style.left = coord.left + 'px'
    mouse.style.position = 'fixed'
}

mouse.onkeydown = (event) => {
    event.preventDefault()
    mouseMotion ( event.key, 150 )
}

