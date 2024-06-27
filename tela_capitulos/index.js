const config = document.getElementById("config");
const ultimoSave = document.getElementById("ultimo-save");
const home = document.getElementById("home");
const save = JSON.parse(localStorage.getItem("save"));
const modo = JSON.parse(localStorage.getItem("modo"));

const capituloUm = document.getElementById("card1");
const capituloDois = document.getElementById("card2");
const capituloTres = document.getElementById("card3");
const capituloQuatro = document.getElementById("card4");
const capituloCinco = document.getElementById("card5");

const modalCapitulo = document.getElementById("modal-exercicios");
const btnIniciar = document.getElementById("btn-iniciar");
const btnContinuar = document.getElementById("btn-continuar");
const fecharModal = document.getElementById("fechar-modal");
const divEx = document.getElementById("div-exercicios");

const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById("fechar-modal-config");
const btnCreditos = document.getElementById("btn-creditos");
const btnRecomecar = document.getElementById("btn-recomecar");
const btnResetar = document.getElementById("btn-resetar");

ultimoSave.textContent = "Ultime save: " + save;

const musica = document.getElementById("musica")

document.addEventListener('DOMContentLoaded', () => {
  const audioState = localStorage.getItem('audioState');

  if (audioState === 'playing') {
      musica.currentTime = parseFloat(localStorage.getItem('audioTime')) || 0;
      musica.play();
  }

  musica.addEventListener('play', () => {
      localStorage.setItem('audioState', 'playing');
  });

  musica.addEventListener('pause', () => {
      localStorage.setItem('audioState', 'paused');
  });

  musica.addEventListener('timeupdate', () => {
      localStorage.setItem('audioTime', musica.currentTime);
  });
});


config.addEventListener("click", () => {
  modalConfig.showModal();
  btnCreditos.addEventListener("click", () => {
    window.location.href = "../tela_creditos/index.html";
  });
  btnRecomecar.addEventListener("click", () => {
    localStorage.setItem("save", JSON.stringify("ca1-ex1"));
    window.alert("Save reiniciado para o Capítulo 1 exercício 1");
    window.location.reload();
  });
  btnResetar.addEventListener("click", () => {
    let continuar = window.confirm(
      "Deseja realmente resetar? Isso apagará: seu histórico de exercícios concluidos, seu save e o modo do jogo "
    );
    if (continuar) {
      window.location.href = "../index.html";
    }
  });
});
fecharModalConfig.addEventListener("click", () => {
  modalConfig.close();
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
    criarExercicio("ca1-ex1", "Criar database", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca1-ex1", "Criar database", false);
  }

  if (save == "ca1-ex2") {
    criarExercicio("ca1-ex2", "Criar tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca1-ex2", "Criar tabela moradores", false);
  }

  if (save == "ca1-ex3") {
    criarExercicio("ca1-ex3", "Criar tabela casas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca1-ex3", "Criar tabela casas", false);
  }
  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnContinuar.classList.add("invisivel");
  }
  if (modo == "livre") {
    btnIniciar.classList.remove("invisivel");
    btnIniciar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify("ca1-ex1"));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnIniciar.classList.add("invisivel");
  }

  modalCapitulo.showModal();
});
//capitulo 2
capituloDois.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 2";
  //criando exercícios
  if (save == "ca2-ex1") {
    criarExercicio("ca2-ex1", "Alterando a tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca2-ex1", "Alterando a tabela moradores", false);
  }
  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnContinuar.classList.add("invisivel");
  }
  if (modo == "livre") {
    btnIniciar.classList.remove("invisivel");
    btnIniciar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify("ca2-ex1"));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnIniciar.classList.add("invisivel");
  }

  modalCapitulo.showModal();
});
//capitulo 3
capituloTres.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 3";
  //criando exercícios
  if (save == "ca3-ex1") {
    criarExercicio("ca3-ex1", "Inserindo dados na tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca3-ex1", "Inserindo dados na tabela moradores", false);
  }
  if (save == "ca3-ex2") {
    criarExercicio("ca3-ex2", "Inserindo dados na tabela casas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca3-ex2", "Inserindo dados na tabela casas", false);
  }
  if (save == "ca3-ex3") {
    criarExercicio("ca3-ex3", "Atualizando dados da tabela moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca3-ex3", "Atualizando dados da tabela moradores", false);
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnContinuar.classList.add("invisivel");
  }
  if (modo == "livre") {
    btnIniciar.classList.remove("invisivel");
    btnIniciar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify("ca3-ex1"));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnIniciar.classList.add("invisivel");
  }

  modalCapitulo.showModal();
});
//capitulo 4
capituloQuatro.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 4";
  //criando exercícios
  if (save == "ca4-ex1") {
    criarExercicio("ca4-ex1", "Deletando morador", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca4-ex1", "Deletando morador", false);
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnContinuar.classList.add("invisivel");
  }
  if (modo == "livre") {
    btnIniciar.classList.remove("invisivel");
    btnIniciar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify("ca4-ex1"));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnIniciar.classList.add("invisivel");
  }

  modalCapitulo.showModal();
});
//capitulo 5
capituloCinco.addEventListener("click", () => {
  let continuarExercicio = false;
  const titulo = document.getElementById("titulo-modal");
  titulo.textContent = "Capítulo 5";
  //criando exercícios
  if (save == "ca5-ex1") {
    criarExercicio("ca5-ex1", "Aprendendo consultas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca5-ex1", "Aprendendo consultas", false);
  }
  if (save == "ca5-ex2") {
    criarExercicio("ca5-ex2", "Ordenando moradores", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca5-ex2", "Ordenando moradores", false);
  }
  if (save == "ca5-ex3") {
    criarExercicio("ca5-ex3", "Pesquisas filtradas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca5-ex3", "Pesquisas filtradas", false);
  }
  if (save == "ca5-ex4") {
    criarExercicio("ca5-ex4", "Mais pesquisas", true);
    continuarExercicio = true;
  } else {
    criarExercicio("ca5-ex4", "Mais pesquisas", false);
  }

  if (continuarExercicio) {
    btnContinuar.classList.remove("invisivel");
    btnContinuar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify(save));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnContinuar.classList.add("invisivel");
  }
  if (modo == "livre") {
    btnIniciar.classList.remove("invisivel");
    btnIniciar.addEventListener("click", () => {
      localStorage.setItem("exAtual", JSON.stringify("ca5-ex1"));
      window.location.href = "../tela_instrucoes_ex/index.html";
    });
  } else {
    btnIniciar.classList.add("invisivel");
  }

  modalCapitulo.showModal();
});

fecharModal.addEventListener("click", () => {
  modalCapitulo.close();
  excluirExercicios(divEx);
});
// Função para encontrar uma folha de estilo pelo seu nome
function findStyleSheetBySelector(selector) {
  // Iterar sobre todas as folhas de estilo no documento
  for (let i = 0; i < document.styleSheets.length; i++) {
    let styleSheet = document.styleSheets[i];

    // Verificar se é uma folha de estilo válida
    if (styleSheet.href || styleSheet.ownerNode) {
      // Extrair o seletor da folha de estilo
      let sheetSelector = styleSheet.href
        ? styleSheet.href
        : styleSheet.ownerNode.textContent;

      // Verificar se o seletor da folha de estilo contém o seletor desejado
      if (sheetSelector.includes(selector)) {
        // Retornar a folha de estilo encontrada
        return styleSheet;
      }
    }
  }

  // Se não encontrou a folha de estilo
  console.warn(`Folha de estilo '${selector}' não encontrada.`);
  return null;
}

function criarExercicio(id, titulo, exSalvo) {
  const exerciciosConcluidos = JSON.parse(localStorage.getItem("exConcluidos"));
  const ex = document.createElement("div");
  ex.classList.add("ex");
  if (modo == "historia") {
    ex.setAttribute("title", "Exercício bloqueado");
    // ex.classList.add("ex-trancado");
  }
  // else{
  //   ex.classList.add("ex-destrancado");
  // }
  if (exerciciosConcluidos.includes(id)) {
    ex.classList.add("ex-feito");
    ex.setAttribute("title", "Exercício concluido");
  }
  if (exSalvo) {
    ex.classList.add("ex-salvo");
    ex.setAttribute("title", "Exercício onde você parou anteriormente");
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
