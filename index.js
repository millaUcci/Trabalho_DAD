const historia = document.getElementById('botao-historia')
const livre = document.getElementById('botao-livre')
historia.addEventListener('click',()=>{
    localStorage.setItem("modo",JSON.stringify("historia"))
    localStorage.setItem("save",JSON.stringify("ca1-ex1"))
    window.location.href = "./tela_historia/index.html"
})
livre.addEventListener('click',()=>{
    localStorage.setItem("modo",JSON.stringify("livre"))
    localStorage.setItem("save",JSON.stringify("ca1-ex1"))
    window.location.href = "./tela_capitulos/index.html"
})