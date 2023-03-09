const animals = document.getElementById('animals')

let animalsUl = animals.querySelectorAll('li > ul')

animalsUl.forEach(element => {
    let animalsLi = element.querySelectorAll('li')
    let animalsLiCount = animalsLi.length
    let animalsLiParent = element.closest('li')
    animalsLiParent.firstChild.data += '[' + animalsLiCount + ']'
});