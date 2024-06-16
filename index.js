const historia = document.getElementById('botao-historia')
localStorage.setItem("pagina", JSON.stringify("1"));
const livre = document.getElementById('botao-livre')
historia.addEventListener('click',()=>{
    localStorage.setItem("modo",JSON.stringify("historia"))
    localStorage.setItem("save",JSON.stringify("ca1-ex1"))
    localStorage.setItem("exAtual",JSON.stringify("ca1-ex1"))
    localStorage.setItem("exConcluidos",JSON.stringify([]))
    window.location.href = "./tela_historia/index.html"
})
livre.addEventListener('click',()=>{
    localStorage.setItem("modo",JSON.stringify("livre"))
    localStorage.setItem("save",JSON.stringify("ca1-ex1"))
    localStorage.setItem("exAtual",JSON.stringify("ca1-ex1"))
    localStorage.setItem("exConcluidos",JSON.stringify([]))
    localStorage.setItem("pagina",JSON.stringify("4"))
    window.location.href = "./tela_historia/index.html"
})
