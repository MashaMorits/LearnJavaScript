let table = document.getElementById('bagua-table')

table.addEventListener('click', (event) => {

    let target = event.target.closest('td')
    let control
    let targetText

    if (event.target.classList.value == 'edit-ok') {
        finishEditingTd(target, 'ok')
    } else if (event.target.classList.value == 'edit-cancel') {
        finishEditingTd(target, 'cancel')
    }
    if (table.querySelector('td.active')) return
    if (event.target.closest('td')) {
        activeTd(event)
    }
})

function activeTd(event) {
    target = event.target.closest('td')
    control = document.createElement('textarea')
    targetText = target.innerHTML.trim()
    control.value = targetText
    control.style.width = target.clientWidth + 'px'
    control.style.height = target.clientHeight + 'px'
    target.classList.add('active')
    target.innerHTML = ''
    target.append(control)
    target.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    )
    control.focus()
}

function finishEditingTd(target, isCancel) {
    if (isCancel == 'cancel') {
        target.innerHTML = targetText
    } else {
        target.innerHTML = control.value
    }
    
    target.classList.remove('active')
}