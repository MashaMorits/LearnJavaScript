field.addEventListener('click', (event) => {

    let fieldPos = field.getBoundingClientRect()

    let ballTop = event.clientY - fieldPos.top - field.clientTop - ball.clientWidth/2
    let ballLeft = event.clientX - fieldPos.left  - field.clientLeft - ball.clientWidth/2

    if ( ballTop < 0 ) {
        ballTop = 0 
    } else if ( ballTop + ball.clientHeight > field.clientHeight ) {
        ballTop = field.clientHeight - ball.clientHeight
    } 

    if ( ballLeft < 0 ) {
        ballLeft = 0 
    } else if ( ballLeft + ball.clientWidth > field.clientWidth ) {
        ballLeft = field.clientWidth - ball.clientWidth
    } 

    ball.style.top = ballTop + 'px'
    ball.style.left = ballLeft + 'px'
})