const config = document.getElementById("config");

const capituloUm = document.getElementById("capitulo-um");
const capituloDois = document.getElementById("capitulo-dois");
const capituloTres = document.getElementById("capitulo-tres");
const capituloQuatro = document.getElementById("capitulo-quatro");
const capituloCinco = document.getElementById("capitulo-cinco");

const modalCapitulo = document.getElementById("modal-exercicios");
const fecharModal = document.getElementById("fechar-modal");
const divEx = document.getElementById("div-exercicios");

const modalConfig = document.getElementById("modal-config");

config.addEventListener("click", () => {
  modalConfig.showModal();
});

capituloUm.addEventListener("click", () => {
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 1";
  //criando exercícios
  criarExercicio("Criar database");
  criarExercicio("Criar tabela moradores");
  criarExercicio("Criar tabela casas");

  modalCapitulo.showModal();
});
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
