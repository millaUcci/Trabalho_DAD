const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById("fechar-modal-config")
const btnRecomecar = document.getElementById("btn-recomecar")
const btnResetar = document.getElementById("btn-resetar")
const ultimoSave = document.getElementById("ultimo-save");
const config = document.getElementById('config')
const btnCreditos = document.getElementById("btn-creditos");
const save = JSON.parse(localStorage.getItem("save"));

ultimoSave.textContent = "Ultime save: " + save;

const comecar = document.getElementById('btn-comecar')
comecar.addEventListener('click',()=>{
    window.location.href = "../tela_capitulos/index.html"
})

// config.addEventListener("click",()=>{
//     modalConfig.showModal()
// })

// fecharModalConfig.addEventListener("click", () =>{
//   modalConfig.close();
// })
