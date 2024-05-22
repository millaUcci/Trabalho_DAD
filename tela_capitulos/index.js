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

ultimoSave.textContent = "Ultime save: " + save[0];

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
  if (save[0] == "ca1-ex1") {
    criarExercicio("Criar database", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar database", false);
  }

  if (save[0] == "ca1-ex2") {
    criarExercicio("Criar tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar tabela moradores", false);
  }

  if (save[0] == "ca1-ex3") {
    criarExercicio("Criar tabela casas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("Criar tabela casas", false);
  }
  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
  }

  modalCapitulo.showModal();
});
//capitulo 2
capituloDois.addEventListener("click", () => {
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 2";
  //criando exercícios
  criarExercicio("Alterando a tabela moradores");

  modalCapitulo.showModal();
});
capituloTres.addEventListener("click", () => {
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 3";
  //criando exercícios
  criarExercicio("Inserindo dados na tabela moradores");
  criarExercicio("Inserindo dados na tabela casas");

  modalCapitulo.showModal();
});
capituloQuatro.addEventListener("click", () => {
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 4";
  //criando exercícios
  criarExercicio("Deletando moradores");

  modalCapitulo.showModal();
});
capituloCinco.addEventListener("click", () => {
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 5";
  //criando exercícios
  criarExercicio("Aprendendo consultas");
  criarExercicio("Encontrando moradores");
  criarExercicio("Encontrando o vampiro");

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
