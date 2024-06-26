const voltarButton = document.getElementById('voltar');
const certificadoButton = document.getElementById('certificado');
const modal = document.getElementById("modal-nome")
const nome = document.getElementById("nome")
const btnAbrirCertificado = document.getElementById("abrir-pdf")
const fechar = document.getElementById("fechar")
const musica = document.getElementById('musica')

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

voltarButton.addEventListener('click', () => {
    window.location.href = '../tela_capitulos/index.html' 
});

certificadoButton.addEventListener('click',()=>{
    modal.showModal()
})

nome.addEventListener("keyup",()=>{
    if(nome.value =="" || nome.value==" "){
        btnAbrirCertificado.classList.add("invisivel")
    }else{
    btnAbrirCertificado.classList.remove("invisivel")
    }
})

btnAbrirCertificado.addEventListener("click",()=>{
    localStorage.setItem("nome",JSON.stringify(nome.value))
    nome.value = ""
window.location.href="certificado.html"
})
fechar.addEventListener("click",()=>{
    modal.close()
})