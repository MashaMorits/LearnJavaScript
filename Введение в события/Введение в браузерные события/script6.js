const messages = document.querySelectorAll('.pane')

messages.forEach(message => {
    let close = document.createElement('button')
    close.textContent = '[x]'
    close.classList = 'remove-button'
    message.append(close)

    close.addEventListener('click', () => message.remove())
})