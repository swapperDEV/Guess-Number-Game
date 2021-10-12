let difficult = "easy"
const easybtn = document.querySelector('.ea')
const mediumbtn = document.querySelector('.me')
const hardbtn = document.querySelector('.ha')
const check = document.querySelector('.check')
const answer = document.querySelector('.answer')
const returnInfo = document.querySelector('.return')
let num
let max = 100;

const randomIt = () => {
    document.querySelector('.max').textContent = max
    num = Math.round(Math.random()*(max-1)+1)
}

randomIt()

easybtn.addEventListener('click', () => {
    mediumbtn.classList.remove('actlevel')
    hardbtn.classList.remove('actlevel')
    easybtn.classList.add('actlevel')
    difficult = "easy"
    max = 100
    randomIt()
})

mediumbtn.addEventListener('click', () => {
    easybtn.classList.remove('actlevel')
    hardbtn.classList.remove('actlevel')
    mediumbtn.classList.add('actlevel')
    difficult = "medium"
    max = 1000
    randomIt()
})

hardbtn.addEventListener('click', () => {
    mediumbtn.classList.remove('actlevel')
    easybtn.classList.remove('actlevel')
    hardbtn.classList.add('actlevel')
    max = 100000
    difficult = "hard"
    randomIt()
})

check.addEventListener('click', () => {
    let numcheck = answer.value
    if(numcheck == num) {
        returnInfo.innerHTML = "Number is correct, you win. <br/>New game started"
        document.querySelector('.weak').style.backgroundColor = '#2DC350'
        randomIt()
    } else if (numcheck > num) {
        returnInfo.textContent = "Number is too big!"
        document.querySelector('.weak').style.backgroundColor = 'red'
    } else if (numcheck < num) {
        returnInfo.textContent = "Number is so small!"
        document.querySelector('.weak').style.backgroundColor = 'red'
    }
})