contents.addEventListener('click', (event) => {
    if (event.target.closest('a')){

        let value = confirm(`Хотите перейти на ${event.target.textContent} ?`)
        if (!value) event.preventDefault()
        
    }
})