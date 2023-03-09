let ul = document.createElement('ul')
document.body.append(ul)

function createLi() {

    let li = document.createElement('li')
    li.textContent = prompt('Введите текст для элемента списка')
   

    if (li.textContent.trim().length) {
        ul.append(li)
        return createLi()
    }

}

createLi()