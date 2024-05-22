const historia = document.getElementById('botao-historia')
const livre = document.getElementById('botao-livre')
historia.addEventListener('click',()=>{
    const modo = []
    const save = []
    modo.push("historia")
    save.push("ca1-ex1")
    localStorage.setItem("modo",JSON.stringify(modo))
    localStorage.setItem("save",JSON.stringify(save))
    window.location.href = "./tela_historia/index.html"
})
livre.addEventListener('click',()=>{
    const modo = []
    const save = []
    modo.push("livre")
    save.push("ca1-ex1")
    localStorage.setItem("modo",JSON.stringify(modo))
    localStorage.setItem("save",JSON.stringify(save))
    window.location.href = "./tela_capitulos/index.html"
})