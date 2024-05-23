const tituloPagina = document.getElementsByTagName("title")[0];
const tituloEx = document.getElementById("titulo");
const descExercicio = document.getElementById("desc-exercicio");
const divBlocos = document.getElementById("div-blocos");
const save = JSON.parse(localStorage.getItem("save"));
const palavras = document.getElementsByClassName("bloco");
const btVerificar = document.getElementById("btn-verificar");

switch (save[0]) {
  //Case referente ao primeiro exercício do primeiro capitulo
  case "ca1-ex1":
    personalizarExercicio(
      "Para começarmos é preciso criar a cidade onde os moradores ficaram. Usaremos o comando CREATE juntamente com a indicação de qual objeto do banco de dados será criado, que neste caso será um DATABASE.",
      "Monte o código de criação",
      "Capítulo1 - ex1"
    );

    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("database", true, "bloco-b");
    criarBloco("cidade", true, "bloco-c");
    criarBloco("data", false, "");
    criarBloco("data base", false, "");
    arrastarBloco();

    break;
  case "ca1-ex2":
    personalizarExercicio(
      "Mensagem do exercicio aqui",
      "Monte o código de criação",
      "Capítulo1 - ex2"
    );
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
  div.classList.add('draggable'); 
  div.setAttribute('draggable', 'true');

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
    }
  });
}

btVerificar.addEventListener("click", () =>{
  const resultado = terminal.children;
  if (resultado.length > 0){
    let blocoA = resultado[0].id;
    console.log(blocoA);
  } else{
    window.alert("É necessário adicionar ao menos um bloco!")
  }
  
  // window.alert(resultado.textContent);
});
