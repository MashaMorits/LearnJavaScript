tree.addEventListener('click', (event) => {
    if ( event.target.children[0].tagName === 'UL' ) {
        event.target.children[0].hidden = !event.target.children[0].hidden
    }
})