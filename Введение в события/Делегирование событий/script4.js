let tooltip

tool.addEventListener('mouseover', (event) => {
    if ( event.target.dataset.tooltip != undefined ) {

        tooltip = document.createElement('div')
        tooltip.className = 'tooltip'
        tooltip.innerHTML = event.target.dataset.tooltip
        tool.append(tooltip)

        let coord = event.target.getBoundingClientRect()        

        let tooltipLeft = coord.left + event.target.offsetWidth/2 - tooltip.offsetWidth/2
        let tolltipTop = coord.top - tooltip.offsetHeight - 5

        if ( coord.top < tooltip.offsetHeight + 5 ) {
            tolltipTop = coord.bottom + 5
        }

        if ( tooltipLeft < 0 ) tooltipLeft = 5

        tooltip.style.top = tolltipTop + 'px'
        tooltip.style.left = tooltipLeft + 'px'

    }
})


tool.addEventListener('mouseout', (event) => {
    if ( event.target.dataset.tooltip != undefined ) {
        tooltip.remove()
    }
})