function createCalendar(elem, year, month) {

    let table = document.createElement('table')
    table.innerHTML = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>'
    elem.append(table)

    let date = new Date(year, month-1 , 1)

    let date1 = new Date(year, month , 0)
   
    let count = date1.getDate()

    let row = document.createElement('tr')

    table.append(row)

    

    for (let i = 0; i < date.getDay()-1 ; i++) {
        let td = document.createElement('td')
        row.append(td)
    }

    for (i = 1; i <= count; i++) {
        
        let rowLength = row.querySelectorAll('td').length
        
        if( rowLength % 7 == 0 ) {
            row = document.createElement('tr')
            table.append(row)
        }

        let td = document.createElement('td')
        td.textContent = i
        row.append(td)
    }
}


createCalendar(cal, 2012, 9)