const sortTable = document.getElementById('sortTable')

let sortedRows = Array.from(sortTable.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

sortTable.tBodies[0].append(...sortedRows);