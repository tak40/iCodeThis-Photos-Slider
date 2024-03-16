/** @format */

document.querySelector('.left-arrow').addEventListener('click', function () {
    document.querySelector('.scroll-container').scrollLeft -= 100
})

document.querySelector('.right-arrow').addEventListener('click', function () {
    document.querySelector('.scroll-container').scrollLeft += 100
})
