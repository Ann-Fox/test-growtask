// Initialize Swiper
new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// Presentation image
const imageCheckbox1 = document.querySelector('#imageCheckbox1')
const imageCheckbox2 = document.querySelector('#imageCheckbox2')
const imageCheckbox3 = document.querySelector('#imageCheckbox3')
const image = document.querySelector('#image')

imageCheckbox1.addEventListener('change', function () {
    if (imageCheckbox1.checked) {
       image.src = '/assets/images/presentation/image-1.jpg'
    } else {
       image.src = '/assets/images/presentation/image-1.jpg'
    }
 })

 imageCheckbox2.addEventListener('change', function () {
    if (imageCheckbox2.checked) {
       image.src = '/assets/images/presentation/image-2.jpg'
    } else {
       image.src = '/assets/images/presentation/image-2.jpg'
    }
 })

 imageCheckbox3.addEventListener('change', function () {
    if (imageCheckbox3.checked) {
       image.src = '/assets/images/presentation/image-3.jpg'
    } else {
       image.src = '/assets/images/presentation/image-3.jpg'
    }
 })