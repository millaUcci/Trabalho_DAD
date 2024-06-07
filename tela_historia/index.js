const comecar = document.getElementById('btn-comecar')
const home = document.getElementById('home')
comecar.addEventListener('click',()=>{
    window.location.href = "../tela_capitulos/index.html"
})

const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById('fechar-modal-config')
const ultimoSave = document.getElementById("ultimo-save");
const config = document.getElementById('config')
const btnCreditos = document.getElementById("btn-creditos");
const save = JSON.parse(localStorage.getItem("save"));

ultimoSave.textContent = "Ultime save: " + save;

config.addEventListener("click",()=>{
    modalConfig.showModal()
})

fecharModalConfig.addEventListener("click", () =>{
  modalConfig.close();
})
home.addEventListener("click", () => {
  window.location.href = "../index.html";
})