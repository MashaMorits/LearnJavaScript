const ball = document.getElementById('ball')
const field = document.getElementById('field')


ball.style.top = (field.clientHeight - ball.offsetHeight)/2  + 'px'
ball.style.left = (field.clientWidth - ball.offsetWidth)/2  + 'px'