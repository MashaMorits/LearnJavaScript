document.onclick = function (e) { // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

const coordWrap = document.querySelector('.coord__wrap')
const field = document.getElementById('field')
let coord = field.getBoundingClientRect()



let result = document.createElement('div')
result.className = 'info'
result.textContent = `верхний левый, внешний угол: ${Math.round(coord.left)} : ${Math.round(coord.top)}; 
нижний правый, внешний угол: ${Math.round(coord.right)} : ${Math.round(coord.bottom)}; 
верхний левый, внутренний угол ${Math.round(coord.left + field.clientLeft)} : ${Math.round(coord.top + field.clientTop)}; 
нижний правый, внутренний угол ${Math.round(coord.left + field.clientLeft + field.clientWidth)} : ${Math.round(coord.top + field.clientTop + field.clientHeight)};`

coordWrap.append(result)