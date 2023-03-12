// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать


let form = document.forms.calculator;
let before = document.getElementById('money-before')
let after = document.getElementById('money-after')
let heightAfter = document.getElementById('height-after')



form.onchange = function () {
    formChange()
}

function formChange() {
    let initial = +form.money.value
    let interest = form.interest.value / 100
    let years = form.months.value / 12
    let result = Math.round(initial * (1 + interest) ** years)
    before.textContent = initial
    after.textContent = result
    heightAfter.style.height = result/initial*100 + 'px'
}

formChange()