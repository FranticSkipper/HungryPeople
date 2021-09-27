function init() {
    let bookInput = document.getElementById('book-input-number')
    bookInput.addEventListener('input', function(){
        if(this.value <= 0){
            this.value = 0 
        }
    }, false)
    window.addEventListener('resize', moveMenu, false)

    function moveMenu() {
        let parent_original = document.querySelector('#listOriginal')
        let items = document.querySelectorAll('#itemToMove')
        let parent = document.querySelector('#list')
        if (document.body.clientWidth <= 750) {
            if (!parent_original.classList.contains('gone')) {
                parent_original.classList.add('gone')
                for (let i = 0; i < items.length; i++) {
                    parent.appendChild(items[i])
                }
            }
        } else {
            if (parent_original.classList.contains('gone')) {
                parent_original.classList.remove('gone')
                for (let i = 0; i < items.length; i++) {
                    parent_original.appendChild(items[i])
                }
            }
        }
    }
}

$(document).ready(function () {
    $('.mobile__menu').on('click', function () {
        $('.mobile__menu,.column-header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.specialties__slider').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        dots: true,

    });
});

window.addEventListener('load', init, false)