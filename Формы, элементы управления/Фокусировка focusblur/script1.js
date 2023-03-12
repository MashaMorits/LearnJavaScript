let textarea
let view = document.getElementById('view')

view.addEventListener('click', () => {    
    showtextarea()
})

function showtextarea() {

    textarea = document.createElement('textarea')
    textarea.value = view.textContent
    textarea.className = 'edit '
    
    document.body.append(textarea)
    view.replaceWith(textarea)
    textarea.focus()

    
    textarea.onkeydown = function(event) {
        if( event.key == 'Enter') {
            this.blur()
            console.log(this)
        }
    }

    textarea.onblur = () => {
        showDiv()
    }
}

function showDiv() {
    view.textContent = textarea.value
    textarea.replaceWith(view)
}


