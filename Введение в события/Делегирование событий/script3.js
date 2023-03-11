grid.addEventListener('click', (event) => {

    if (event.target.dataset.type != undefined) {

        let type = event.target.dataset.type
        let col = event.target.cellIndex

        sortTable( type, col )
    }

})



function sortTable( type, col ) {
     let rows = Array.from(grid.rows).slice(1)
     
     if ( type === 'number' ) {
        rows.sort( (rowA, rowB) => {
            return rowA.cells[col].innerHTML - rowB.cells[col].innerHTML
        }) 
     } else if ( type === 'string' ) {
        rows.sort( (rowA, rowB) => {
            return rowA.cells[col].innerHTML > rowB.cells[col].innerHTML ? 1 : -1
        } )
     }

     grid.append(...rows)
}


