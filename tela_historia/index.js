const comecar = document.getElementById('btn-comecar');
const tituloPagina = document.getElementById('titulo-a');
const descExercicio = document.getElementById('desc-a');

function personalizarPaginaA(desc, titulo) {
    descExercicio.textContent = desc;
    tituloEx.textContent = titulo;
    tituloPagina.textContent = titulo;
}

comecar.addEventListener('click',()=>{
    window.location.href = "../tela_capitulos/index.html"
})