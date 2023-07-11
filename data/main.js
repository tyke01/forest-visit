window.addEventListener('scroll', () => {
    document.querySelector('.nav-container').classList.toggle('window-scroll', window.scrollY > 5);
});


const menu = document.querySelector('.menu')
const openBtn = document.querySelector('#menu-open')
const closeBtn = document.querySelector('#menu-close')

openBtn.addEventListener('click', ()=> {
    menu.style.display = "flex"
    closeBtn.style.display= "inline-block"
    openBtn.style.display = "none"
})
const closenav = ()=> {
    menu.style.display = "none"
    closeBtn.style.display= "none"
    openBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closenav)