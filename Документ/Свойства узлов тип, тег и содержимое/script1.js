let li = document.querySelectorAll('li')


li.forEach(el => {
    console.log(el.firstChild.data)
});

console.log(li.length)