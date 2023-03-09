const table = document.getElementById('age-table')
const labels = table.querySelectorAll('label')
const td = table.querySelector('td')
const form = document.querySelector('form[name="search"]')
const inputs = form.querySelectorAll('input')
const firstInput = inputs[0]
const lastInput = inputs[inputs.length - 1]

console.log(table)
console.log(labels)
console.log(td)
console.log(form)
console.log(firstInput)
console.log(lastInput)