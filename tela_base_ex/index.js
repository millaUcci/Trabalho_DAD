const tituloPagina = document.getElementsByTagName("title")[0];
const tituloEx = document.getElementById("titulo");
const descExercicio = document.getElementById("desc-exercicio");
const divBlocos = document.getElementById("div-blocos");
const save = JSON.parse(localStorage.getItem("save"));
const exercicioAtual = JSON.parse(localStorage.getItem("exAtual"));
const palavras = document.getElementsByClassName("bloco");
selecionadas = [];

switch (save[0]) {
  //Case referente ao primeiro exercício do primeiro capitulo
  case "ca1-ex":
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
  case "ca1-ex":
    personalizarExercicio(
      "Agora que a cidade foi criada precisamos criar duas tabelas, uma para guardar dados sobre os moradores da cidade e outra para guardar os dados sobre as casas dos moradores.\nAinda utilizaremos o comando CREATE porém agora utilizaremos o objeto do banco de dados TABLE, seguido dos campos da tabela e do tipo de cada campo.\nAlém de indicarmos o tipo dos campos, podemos também colocar verificações sendo algumas obrigatórias e outras não.",
      "Seguindo as instruções no seu caderno, monte o código de criãçao",
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
    criarBloco("id_morador integer", true, "bloco-e");
    criarBloco("nome varchar(15)", true, "blocof");
    criarBloco("vampcity,", false, "");
    criarBloco("[", false, "");
    criarBloco(");", true, "bloco-k");
    arrastarBloco();
    break;
  case "ca1-ex1":
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
    arrastarBloco()
    break;
}

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
      selecionadas.push(palavraArrastada) //Alterei aqui ass: duda
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

//Alterei aqui ass: duda
function apagar(){
  const ultimaPalavra = selecionadas.pop();
  terminal.removeChild(ultimaPalavra);
}