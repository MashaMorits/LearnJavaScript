let form = document.getElementById('prompt-form')
let trigger = document.getElementById('trigger')
let modalContainer = document.getElementById('prompt-form-container')

trigger.onclick = () => {
    modalContainer.classList.add('active')
    form.text.focus()
}

form.onsubmit = () => alertValue(form.text.value)

form.cancel.onclick = () => alertValue(null)

form.onkeydown = (event) => {

    
    
    if ( event.key == 'Escape' ) {
        alertValue(null)
    } 
    if ( event.key == 'Tab' && event.shiftKey && event.target == form.text) {     

        form.cancel.focus()
        event.preventDefault()

    } else if ( event.key == 'Tab' && event.target == form.cancel) {  

        form.text.focus()
        event.preventDefault()

    }
}

function alertValue(value) {
    alert(`Вы ввели ${value}`)
    modalContainer.classList.remove('active')
}