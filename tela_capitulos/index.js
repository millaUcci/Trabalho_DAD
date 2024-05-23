const config = document.getElementById("config");
const ultimoSave = document.getElementById("ultimo-save");
const save = JSON.parse(localStorage.getItem("save"));

const capituloUm = document.getElementById("capitulo-um");
const capituloDois = document.getElementById("capitulo-dois");
const capituloTres = document.getElementById("capitulo-tres");
const capituloQuatro = document.getElementById("capitulo-quatro");
const capituloCinco = document.getElementById("capitulo-cinco");

const modalCapitulo = document.getElementById("modal-exercicios");
const btnIniciar = document.getElementById("btn-iniciar");
const btnContinuar = document.getElementById("btn-continuar");
const fecharModal = document.getElementById("fechar-modal");
const divEx = document.getElementById("div-exercicios");

const modalConfig = document.getElementById("modal-config");
const btnCreditos = document.getElementById("btn-creditos");

ultimoSave.textContent = "Ultime save: " + save;

config.addEventListener("click", () => {
  modalConfig.showModal();
});
btnCreditos.addEventListener("click", () => {
  window.location.href = "../tela_creditos/index.html";
});

//capitulo 1
capituloUm.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 1";
  //criando exercícios
  if (save == "ca1-ex1") {
    criarExercicio("Criar database", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar database", false);
    continuarExercicio=false
  }

  if (save == "ca1-ex2") {
    criarExercicio("Criar tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar tabela moradores", false);
    continuarExercicio=false
  }

  if (save == "ca1-ex3") {
    criarExercicio("Criar tabela casas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar tabela casas", false);
    continuarExercicio=false
  }
  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_base_ex/index.html";
    });
  }else{
    btnContinuar.classList.add("invisivel");
  }
  btnIniciar.addEventListener('click',()=>{
    localStorage.setItem("exAtual", JSON.stringify("ca1-ex1"));
      window.location.href = "../tela_base_ex/index.html";
  })

  modalCapitulo.showModal();
});
//capitulo 2
capituloDois.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 2";
  //criando exercícios
  if (save == "ca2-ex1") {
    criarExercicio("Alterando a tabela moradores", true);
    continuarExercicio=true
  } else {
    criarExercicio("Alterando a tabela moradores", false);
    continuarExercicio=false
  }
  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_base_ex/index.html";
    });
  }else{
    btnContinuar.classList.add("invisivel");
  }
  btnIniciar.addEventListener('click',()=>{
    localStorage.setItem("exAtual", JSON.stringify("ca2-ex1"));
      window.location.href = "../tela_base_ex/index.html";
  })

  modalCapitulo.showModal();
});
capituloTres.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 3";
  //criando exercícios
  if (save == "ca3-ex1") {
    criarExercicio("Inserindo dados na tabela moradores", true);
    continuarExercicio=true
  } else {
    criarExercicio("Inserindo dados na tabela moradores", false);
    continuarExercicio=false
  }
  if (save == "ca3-ex2") {
    criarExercicio("Inserindo dados na tabela casas", true);
    continuarExercicio=true
  } else {
    criarExercicio("Inserindo dados na tabela casas", false);
    continuarExercicio=false
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_base_ex/index.html";
    });
  }else{
    btnContinuar.classList.add("invisivel");
  }
  btnIniciar.addEventListener('click',()=>{
    localStorage.setItem("exAtual", JSON.stringify("ca3-ex1"));
      window.location.href = "../tela_base_ex/index.html";
  })

  modalCapitulo.showModal();
});
capituloQuatro.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 4";
  //criando exercícios
  if (save == "ca4-ex1") {
    criarExercicio("Deletando moradores", true);
    continuarExercicio=true
  } else {
    criarExercicio("Deletando moradores", false);
    continuarExercicio=false
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_base_ex/index.html";
    });
  }else{
    btnContinuar.classList.add("invisivel");
  }
  btnIniciar.addEventListener('click',()=>{
    localStorage.setItem("exAtual", JSON.stringify("ca4-ex1"));
      window.location.href = "../tela_base_ex/index.html";
  })
  modalCapitulo.showModal();
});
capituloCinco.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 5";
  //criando exercícios
  if (save == "ca5-ex1") {
    criarExercicio("Aprendendo consultas", true);
    continuarExercicio=true
  } else {
    criarExercicio("Aprendendo consultas", false);
    continuarExercicio=false
  }
  if (save == "ca5-ex2") {
    criarExercicio("Encontrando moradores", true);
    continuarExercicio=true
  } else {
    criarExercicio("Encontrando moradores", false);
    continuarExercicio=false
  }
  if (save == "ca5-ex2") {
    criarExercicio("Encontrando o vampiro", true);
    continuarExercicio=true
  } else {
    criarExercicio("Encontrando o vampiro", false);
    continuarExercicio=false
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_base_ex/index.html";
    });
  }else{
    btnContinuar.classList.add("invisivel");
  }
  btnIniciar.addEventListener('click',()=>{
    localStorage.setItem("exAtual", JSON.stringify("ca5-ex1"));
      window.location.href = "../tela_base_ex/index.html";
  })

  modalCapitulo.showModal();
});

fecharModal.addEventListener("click", () => {
  modalCapitulo.close();
  excluirExercicios(divEx);
});
function criarExercicio(titulo, exSalvo) {
  const ex = document.createElement("div");
  ex.classList.add("ex");
  if (exSalvo) {
    ex.classList.add("ex-salvo");
  }
  ex.textContent = titulo;
  divEx.appendChild(ex);
}
function excluirExercicios(div) {
  const ex = div.children;
  for (let i = 0; i < ex.length; i++) {
    const elemento = div.children[i];
    div.removeChild(elemento);
    i--;
  }
}
