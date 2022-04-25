const btn = document.getElementById('btn')
const nav__ul = document.getElementById('nav')

btn.addEventListener('click', function(){
    nav__ul.classList.toggle('active')
})