const tituloPagina = document.getElementsByTagName("title")[0];
const tituloEx = document.getElementById("titulo");
const ultimoSave = document.getElementById("ultimo-save");
const descExercicio = document.getElementById("desc-exercicio");
const divBlocos = document.getElementById("div-blocos");
const modalSair = document.getElementById("modal-sair-exercicio");
const save = JSON.parse(localStorage.getItem("save"));
const exercicioAtual = JSON.parse(localStorage.getItem("exAtual"));
const btnSair = document.getElementById("btn-sair-exercicio");
const btnProx = document.getElementById("btn-proximo-ex");
const palavras = document.getElementsByClassName("bloco");
const btVerificar = document.getElementById("btn-verificar");
const vampiro = document.getElementById("vampiro");
const fala = document.getElementById("fala-vampiro");
const divFala = document.getElementById("div-fala");
const btnSairSalvar = document.getElementById("sair-e-salvar");
const btnSairSemSalvar = document.getElementById("sair-sem-salvar");
let qtBlocos = 0;

//modal caderno
const info = document.getElementById("info");
const modalCaderno = document.getElementById("modal-caderno");
const fecharModalCaderno = document.getElementById("fechar-modal-caderno");
const conteudo = document.getElementById("conteudo");
const tituloSql = document.getElementById("conteudo-sql");
const tituloCreate = document.getElementById("conteudo-create");
const tituloAlter = document.getElementById("conteudo-alter");
const tituloUpdate = document.getElementById("conteudo-update");
const tituloDelete = document.getElementById("conteudo-delete");

//Pegando ultimo save
ultimoSave.textContent = "Ultime save: " + save;

//Fala vampiro
// vampiro.addEventListener("click", () => {
//   falaVampiro("Não me toque", 1500);
// });
function sumirFala() {
  divFala.classList.add("invisivel");
}
function falaVampiro(texto, tempo) {
  fala.textContent = texto;
  divFala.classList.remove("invisivel");
  setTimeout(sumirFala, tempo);
}

//modal sair exercício
btnSair.addEventListener("click", () => {
  modalSair.children[0].textContent =
    "Deseja sair e salvar o seu progresso? Seu ultimo save é: " + save;
  modalSair.showModal();
  btnSairSemSalvar.addEventListener("click", () => {
    window.location.href = "../tela_capitulos/index.html";
  });
  btnSairSalvar.addEventListener("click", () => {
    localStorage.setItem("save", JSON.stringify(exercicioAtual));
    window.location.href = "../tela_capitulos/index.html";
  });
});

//Vendo o exercíco a
switch (exercicioAtual) {
  case "ca1-ex2":
    qtBlocos = 3;
    personalizarExercicio(
      "Para começarmos é preciso criar a cidade onde os moradores ficaram. Usaremos o comando CREATE juntamente com a indicação de qual objeto do banco de dados será criado, que neste caso será um DATABASE.",
      "Monte abaixo o comando para criar a cidade com o nome “VampCity ",
      "Capítulo1 - ex1"
    );

    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("database", true, "bloco-b");
    criarBloco("vampcity;", true, "bloco-c");
    criarBloco("data", false, "");
    criarBloco("data base", false, "");
    arrastarBloco();

    break;
  case "ca1-ex1":
    qtBlocos = 11;
    personalizarExercicio(
      "Agora que a cidade foi criada precisamos criar duas tabelas, uma para guardar dados sobre os moradores da cidade e outra para guardar os dados sobre as casas dos moradores.\nAinda utilizaremos o comando CREATE porém agora utilizaremos o objeto do banco de dados TABLE, seguido dos campos da tabela e do tipo de cada campo.",
      "Crie a tabela 'Moradores' sabendo que ela terá os campos: id_morador, nome, sobrenome,  filhos, tipo_sanguineo e idade",
      "Capítulo1 - ex2"
    );
    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco("];", false, "");
    criarBloco(";", false, "");
    criarBloco("sobrenome varchar(15),", true, "bloco-g");
    criarBloco("filhos integer,", true, "bloco-h");
    criarBloco("tipo_sanguineo varchar(5),", true, "bloco-i");
    criarBloco("idade integer", true, "bloco-j");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("table", true, "bloco-b");
    criarBloco("moradores", true, "bloco-c");
    criarBloco("data", false, "");
    criarBloco("data base,", false, "");
    criarBloco("(", true, "bloco-d");
    criarBloco("id_morador integer,", true, "bloco-e");
    criarBloco("nome varchar(15),", true, "blocof");
    criarBloco("vampcity,", false, "");
    criarBloco("[", false, "");
    criarBloco(");", true, "bloco-k");
    criarBloco("PRIMARY KEY", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    criarBloco("NOT NULL,", true, "bloco-k");
    arrastarBloco();
    break;
  case "ca1-ex3":
    qtBlocos = 10;
    personalizarExercicio(
      "Ainda usando os conhecimentos adquiridos no exercício anterior, crie a tabela de casas a partir das colunas dadas a você no caderno. Decida você mesmo o tipo e as verificações dos outros três campos. (dica: todos os campos são obrigatórios, mas nem todos são únicos)",
      "Monte o comando abaixo",
      "Capítulo1 - ex3"
    );
    criarBloco("create table", true, "bloco-a");
    criarBloco("id integer,", false, "");
    criarBloco("id integer primary key,", true, "bloco-d");
    criarBloco("num_casa integer,", true, "bloco-e");
    criarBloco("num_casa varchar(10),", false, "");
    criarBloco("casas", true, "bloco-b");
    criarBloco("(", true, "bloco-c");
    criarBloco(");", true, "bloco-j");
    criarBloco("varchar(5),", false, "");
    criarBloco("varchar(100)", true, "bloco-i");
    criarBloco("id_morador", true, "bloco-f");
    criarBloco("boolean,", false, "");
    criarBloco("integer,", true, "bloco-g");
    criarBloco("rua", true, "bloco-h");
    arrastarBloco();
    break;
  case "ca2-ex1":
    personalizarExercicio("teste ca2", "hbvihawb fvhiabwf", "jcaidvniadnvij");
    criarBloco("ivjwidfnoj", false, "");
    break;
}

//fazendo abrir a modal do caderno de exercícios
info.addEventListener("click", () => {
  modalCaderno.showModal();
  fecharModalCaderno.addEventListener("click", () => {
    modalCaderno.close();
  });
});

//Preenchendo o conteudo do caderno de consultas
conteudo.classList.add("selecionado");
tituloSql.classList.add("selecionado");
tituloSql.addEventListener("click", () => {
  tituloSql.classList.add("selecionado");
  tituloSql.classList.remove("sem-selecao");

  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");

  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque assumenda atque esse praesentium voluptatem consequuntur vero amet eaque? Aut animi quibusdam conseq";
});
tituloCreate.addEventListener("click", () => {
  tituloCreate.classList.add("selecionado");
  tituloCreate.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.textContent = "Lorem ipsum dolor sit ";
});
tituloAlter.addEventListener("click", () => {
  tituloAlter.classList.add("selecionado");
  tituloAlter.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.textContent =
    "Doloremque assumenda atque esse praesentium voluptatem conse";
});
tituloUpdate.addEventListener("click", () => {
  tituloUpdate.classList.add("selecionado");
  tituloUpdate.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.textContent = "consectetur adipisicing elit.";
});
tituloDelete.addEventListener("click", () => {
  tituloDelete.classList.add("selecionado");
  tituloDelete.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.textContent = "met eaque? Aut animi quibusdam conseq";
});

//funções
function personalizarExercicio(desc, titulo, tituloPag) {
  descExercicio.textContent = desc;
  tituloEx.textContent = titulo;
  tituloPagina.textContent = tituloPag;
}

function criarBloco(desc, blocoSolucao, id) {
  const div = document.createElement("div");
  div.textContent = desc.toUpperCase();
  div.classList.add("bloco");
  div.classList.add("draggable");
  div.setAttribute("draggable", "true");

  if (blocoSolucao) {
    div.setAttribute("id", id);
  }
  divBlocos.appendChild(div);
}

function arrastarBloco() {
  Array.from(palavras).forEach((palavra) => {
    palavra.addEventListener("dragstart", () => {
      palavra.classList.add("dragging");
    });

    palavra.addEventListener("dragend", () => {
      palavra.classList.remove("dragging");
    });
  });

  terminal.addEventListener("dragover", (e) => {
    e.preventDefault();
    terminal.classList.add("dragover");
  });

  terminal.addEventListener("dragleave", () => {
    terminal.classList.remove("dragover");
  });

  terminal.addEventListener("drop", (e) => {
    e.preventDefault();
    terminal.classList.remove("dragover");
    const palavraArrastada = document.querySelector(".bloco.dragging"); // Alteração aqui
    if (palavraArrastada) {
      terminal.appendChild(palavraArrastada);
      selecionadas.push(palavraArrastada); //Alterei aqui ass: duda
    }
  });

  divBlocos.addEventListener("dragover", (e) => {
    e.preventDefault();
    divBlocos.classList.add("dragover");
  });

  divBlocos.addEventListener("dragleave", () => {
    divBlocos.classList.remove("dragover");
  });

  divBlocos.addEventListener("drop", (e) => {
    e.preventDefault();
    divBlocos.classList.remove("dragover");
    const palavraArrastada = document.querySelector(".bloco.dragging"); // Alteração aqui
    if (palavraArrastada) {
      divBlocos.appendChild(palavraArrastada);
    }
  });
}
btnProx.addEventListener("click", () => {
  switch (exercicioAtual) {
    case "ca1-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca1-ex2"));
      break;
    case "ca1-ex2":
      localStorage.setItem("exAtual", JSON.stringify("ca1-ex3"));
      break;
    case "ca1-ex3":
      localStorage.setItem("exAtual", JSON.stringify("ca2-ex1"));
      break;
    case "ca2-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca1-ex3"));
      break;
    case "ca3-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca3-ex2"));
      break;
    case "ca3-ex2":
      localStorage.setItem("exAtual", JSON.stringify("ca4-ex1"));
      break;
    case "ca4-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca5-ex1"));
      break;
    case "ca5-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca5-ex2"));
      break;
    case "ca5-ex2":
      localStorage.setItem("exAtual", JSON.stringify("ca5-ex3"));
      break;
    case "ca5-ex3":
      localStorage.setItem("exAtual", JSON.stringify("ca5-ex4"));
      break;
  }
  window.location.reload();
});
function verificarAtividade() {
  const blocos = terminal.children;
  const blocosCorretos = [];

  if (qtBlocos != blocos.length) {
    return false;
  }

  for (let i = 0; i < blocos.length; i++) {
    if (blocos[i].id) {
      blocosCorretos.push(blocos[i].id);
    } else {
      return false; // Se algum bloco não tem ID, a atividade está incorreta
    }
  }

  // Verificando se os blocos estão em ordem alfabética
  for (let i = 0; i < blocosCorretos.length - 1; i++) {
    if (blocosCorretos[i].localeCompare(blocosCorretos[i + 1]) > 0) {
      return false;
    }
  }

  return true;
}

function adicionarEventoVerificar() {
  btVerificar.addEventListener("click", () => {
    const resultado = terminal.children;
    if (resultado.length > 0) {
      if (verificarAtividade()) {
        terminal.classList.remove("errado");
        terminal.classList.add("certo");
        btnProx.classList.remove("invisivel");
        falaVampiro("Parabéns você acertou", 2000);
      } else {
        terminal.classList.remove("certo");
        terminal.classList.add("errado");
        btnProx.classList.add("invisivel");
        falaVampiro("Acho que você errou alguma coisa", 2000);
        setTimeout(mudarClasse, 2500);
      }
    } else {
      window.alert("É necessário adicionar ao menos um bloco!");
    }
  });
}
function mudarClasse() {
  terminal.classList.remove("errado");
}

btVerificar.addEventListener("click", () => {
  const resultado = terminal.children;
  if (resultado.length > 0) {
    let blocoA = resultado[0].id;
    console.log(blocoA);
  } else {
    window.alert("É necessário adicionar ao menos um bloco!");
  }

  // window.alert(resultado.textContent);
});

adicionarEventoVerificar();

//Alterei aqui ass: duda
function apagar() {
  if (terminal.lastChild) {
    blocoAntigo = terminal.lastChild;
    terminal.removeChild(blocoAntigo);
    divBlocos.appendChild(blocoAntigo);
  }
}
