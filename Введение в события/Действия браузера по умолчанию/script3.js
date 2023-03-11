thumbs.addEventListener('click', (event) => {
    
    if(event.target.closest('a')){
        event.preventDefault()
        let link = event.target.closest('a').getAttribute('href')
        largeImg.setAttribute('src', link)
    }

})