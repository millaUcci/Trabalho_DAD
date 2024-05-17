const historia = document.getElementById('botao-historia')
const livre = document.getElementById('botao-livre')
historia.addEventListener('click',()=>{
    const modo = []
    modo.push("historia")
    localStorage.setItem("modo",JSON.stringify(modo))
    window.location.href = "./tela_historia/index.html"
})
livre.addEventListener('click',()=>{
    const modo = []
    modo.push("livre")
    localStorage.setItem("modo",JSON.stringify(modo))
    window.location.href = "./tela_capitulos/index.html"
})