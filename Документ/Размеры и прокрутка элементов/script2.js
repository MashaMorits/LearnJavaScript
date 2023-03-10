let divWithScroll = document.createElement('div')
divWithScroll.style.overflow = 'scroll'
document.body.append(divWithScroll)

let scrollBarWidth = divWithScroll.offsetWidth - divWithScroll.clientWidth

alert(scrollBarWidth)

divWithScroll.remove()