const musica = document.getElementById("musica")

document.addEventListener('DOMContentLoaded', () => {
    const audioState = localStorage.getItem('audioState');
  
    if (audioState === 'playing') {
        musica.currentTime = parseFloat(localStorage.getItem('audioTime')) || 0;
        musica.play();
    }
  
    musica.addEventListener('play', () => {
        localStorage.setItem('audioState', 'playing');
    });
  
    musica.addEventListener('pause', () => {
        localStorage.setItem('audioState', 'paused');
    });
  
    musica.addEventListener('timeupdate', () => {
        localStorage.setItem('audioTime', musica.currentTime);
    });
  });

const home = document.getElementById("voltar-para-capitulos")
home.addEventListener("click",()=>{
    window.location.href ="../tela_capitulos/index.html"
})