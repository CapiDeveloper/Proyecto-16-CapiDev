const boton = document.getElementById('button');
const icono = document.getElementById('icono');

boton.addEventListener('click',()=>{
    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen() ||
        document.documentElement.webkitRequestFullscreen() ||
        document.documentElement.mozRequestFullscreen();

        icono.src = 'iconos/salir.svg';
    }else{
        document.exitFullscreen() ||
        document.webkitExitFullscreen() ||
        document.mozCancelFullscreen();

        icono.src = 'iconos/abrir.svg';
    }
});