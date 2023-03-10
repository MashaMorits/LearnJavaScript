let sliderWrap = document.querySelector('.slider__wrap')
let sliderUl = document.querySelector('.slider__wrap ul')
let slider = document.querySelector('.slider')
let arrow = document.querySelectorAll('.slider .arrow')
let sliderLeft = 0

slider.addEventListener('click', (event) => {
    if (event.target.classList.contains('prev')) {
        sliderLeft += sliderWrap.clientWidth
    } else if (event.target.classList.contains('next')) {
        sliderLeft -= sliderWrap.clientWidth
    }
    

    if ( sliderLeft > 0 ){

        sliderLeft = 0

    } else if ( sliderLeft - sliderWrap.clientWidth <= -sliderUl.clientWidth ) {

        sliderLeft = -sliderUl.clientWidth + sliderWrap.clientWidth

    }

    sliderUl.style.left = sliderLeft + 'px'

})





