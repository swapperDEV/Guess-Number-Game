const switchMode = document.querySelector('.changemode');
switchMode.addEventListener('click', () => {
    document.body.classList.toggle('lightmode')
    document.body.classList.toggle('darkmode')
    document.querySelector('.changemode').classList.toggle('fa-sun')
    document.querySelector('.changemode').classList.toggle('fa-moon')
})