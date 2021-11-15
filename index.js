const dark = document.getElementById('dark')
const light = document.getElementById('light')
const catty = document.getElementById('cattyName')
const btn = document.getElementById('btn')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    btn.classList.add('btn-light')
    btn.classList.add('color-8')
    btn.classList.remove('color-9')
    btn.classList.remove('btn-dark')
    document.body.style.backgroundColor = "#212224"
    document.body.style.color = "#fff"
    catty.style.color = "#fff"
}

dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    btn.classList.remove('color-8')
    btn.classList.add('color-9')
    btn.classList.remove('btn-light')
    btn.classList.add('btn-dark')
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
    catty.style.color = "#000"
}
light.addEventListener('click', toggleLight)