let rows = table.rows
let i = 0


for (i; i < rows.length; i++) {

    let row = rows[i]
    let tds = row.querySelectorAll('td') 

    tds.forEach((td, index) => {
        td.textContent = `${index + 1} : ${i + 1}`
        
        if( i == index) td.style.backgroundColor = 'red';
    });
}