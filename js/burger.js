const icono = document.querySelector('.icon');
const menuMovil = document.querySelector('.menu-movil');
const links = document.querySelectorAll('.brand');


icono.addEventListener('click',()=>{
    menuMovil.classList.toggle('active');


    if(menuMovil.classList.contains('active')){
        icono.classList.add('delete')
        icono.innerHTML = `X`;
    } else {
        icono.innerHTML = `<i class="bi bi-list"></i>`
    }
    
})

links.forEach(link =>{
    link.addEventListener('click',()=>{
        menuMovil.classList.remove('active');
        icono.innerHTML = `<i class="bi bi-list"></i>`
    })
})