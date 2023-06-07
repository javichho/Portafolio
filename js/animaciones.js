/*Animacion de carga*/

//Selectores
const body = document.querySelector('body');
const global = document.querySelector('.contenedor-global')
const animacion = document.querySelector('.boxes');


document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
         global.style.display = 'block';
      animacion.style.display = 'none';
      body.style.background = 'white';
  },100); //CAMBIAR
})

  
//Lo dejamos en la normalidad
global.style.display = 'none';
animacion.style.display = 'block';
body.style.background = '#222';



/*ANIMACION CARGAR TEXTOS Y PARRAFOS*/

//Selectores
const tituloInicio = document.querySelector('.titulo-inicio');
const parrafoInicio= document.querySelector('.parrafo-inicio');
const botonCurriculum = document.querySelector('.button');
const retratoImg = document.querySelector('.card');

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
      tituloInicio.classList.add('active');
      parrafoInicio.classList.add('active');
      botonCurriculum.classList.add('active');
      retratoImg.classList.add('active');
  },1100)
});





/*======== ANIMACION DE CARGAR (S/ABOUT) =========*/
window.addEventListener('scroll', function() {
  //selectores elementos 
 var imagenAbout = document.querySelector('.retrato-about');
 var informacionAbout = document.querySelector('.informacion-about');
 var tituloAbout = document.querySelector('.titulo-about')



  var seccionAbout = document.getElementById('about');

  var seccionOffset = seccionAbout.offsetTop;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition > (seccionOffset - (windowHeight / 2))) {
    imagenAbout.classList.add('active');
    informacionAbout.classList.add('active');
    tituloAbout.classList.add('active');
  }
});

