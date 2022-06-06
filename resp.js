burgur = document.querySelector('.burgur')
navbar=document.querySelector('.navbar')
list=document.querySelector('.list')
search=document.querySelector('.search')

burgur.addEventListener('click',()=>{
    navbar.classList.toggle('h_resp')
    list.classList.toggle('van_resp')
    search.classList.toggle('van_resp')
})