//se toma el boton y adicional el icono
let playicon = document.querySelectorAll("#icono");
console.log(playicon);
//se toma el valor de video que actualmente es el id
let video = document.getElementById("video");
//tomamos la duracion que en este caso sera el SPAM donde imprimiremos el tiempo;
let totalduration = document.getElementById("totalduration");
//se toma el tiempo del video que sera impreso por medio del span
let videotime = document.getElementById("tiempovideo");

let iniciar = document.getElementById("iniciar");

let playback = document.getElementById("playback");

//se activa el evento en el boton iniciar.

iniciar.addEventListener('click',function(){

    //se inicia una comparacion.

    if(video.paused){
        video.play();
        playicon.classList.replace("fa-play","fa-pause");
    }
    else{
        video.pause();
        playicon.classList.replace("fa-pause","fa-play");
    }

})

playback.addEventListener("input",function(){
    video.currentTime = playback.value;
    playback.max = Math.floor(video.duration);
})

video.addEventListener("timeupdate" ,function(){
    videotime.innerHTML = Math.floor(video.currentTime);
    playback.value = video.currentTime;
    playback.max = Math.floor(video.duration);
})

window.onload=function(){
    video.currentTime = playback.value;
    totalduration.innerHTML = Math.floor(video.duration);
}