const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById("fechar-modal-config");
const btnRecomecar = document.getElementById("btn-recomecar");
const btnResetar = document.getElementById("btn-resetar");
const ultimoSave = document.getElementById("ultimo-save");
const config = document.getElementById("config");
const btnCreditos = document.getElementById("btn-creditos");
const save = JSON.parse(localStorage.getItem("save"));
const paginaAtual = JSON.parse(localStorage.getItem("pagina"));
const tituloA = document.getElementById("titulo-a");
const tituloA2 = document.getElementById("titulo-a2");
const tituloB = document.getElementById("titulo-b");
const tituloB2 = document.getElementById("titulo-b2");
const subTituloA = document.getElementById("sub-titulo-a");
const subTituloA2 = document.getElementById("sub-titulo-a2")
const subTituloB = document.getElementById("sub-titulo-b");
const subTituloB2 = document.getElementById("sub-titulo-b2");
const descA = document.getElementById("desc-a");
const descA2 = document.getElementById("desc-a2");
const descB = document.getElementById("desc-b");
const descB2 = document.getElementById("desc-b2");
let mudanca = 0;
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

ultimoSave.textContent = "Ultime save: " + save;
localStorage.setItem('audioState','playing');
const comecar = document.getElementById("btn-comecar");
comecar.addEventListener("click", () => {
  localStorage.setItem('audioTime', musica.currentTime);
  localStorage.setItem('audioState', musica.paused ? 'paused' : 'playing');
  window.location.href = "../tela_capitulos/index.html";
});

const proximo = document.getElementById("btn-proximo");
proximo.addEventListener("click", () => {
  let paginaAtualTemp = parseInt(paginaAtual) + 1;
  localStorage.setItem("pagina", JSON.stringify(paginaAtualTemp));
  window.location.reload();
  localStorage.setItem('audioTime', musica.currentTime);
  localStorage.setItem('audioState', musica.paused ? 'paused' : 'playing');
});

const voltar = document.getElementById("btn-voltar-pagina");
const modo =JSON.parse(localStorage.getItem("modo"))
if(paginaAtual>1){
    if( modo == "historia" || modo =="livre" && paginaAtual>=5){
      console.log("entrou")
      voltar.classList.remove("invisivel")
    }
}else{
    voltar.classList.add("invisivel")
}

voltar.addEventListener("click", () => {
  let paginaAtualTemp = parseInt(paginaAtual) - 1;

  localStorage.setItem("pagina", JSON.stringify(paginaAtualTemp));
  window.location.reload();
});

switch (String(paginaAtual)) {
  case "1":
    tituloA.textContent = "Prólogo:";
    descA.textContent =
      "Klaus é um vampiro e trabalha em uma grande empresa clandestina de sangue fresco, inteiramente coordenada por vampiros.";
    descA2.textContent = "Ele recebeu a missão de organizar os dados dos moradores da cidade – a fonte do sangue - em um banco de dados SQL, você irá ajuda-lo (apenas cuidado com as presas dele). Para que você o ajude, lhe apresentamos as seguintes instruções: ";
    tituloB.textContent = "Introdução:";
    subTituloB.textContent = "O que é um banco de dados?";
    descB.textContent =
      "Um banco de dados é uma coleção eletrônica e organizada de informações onde os dados são estruturados em tabelas de linhas e colunas.";
    descB2.textContent =
    "Em um banco de dados relacional, onde os dados são organizados em tabelas e as relações entre estas são estabelecidas por chaves únicas.";
    break;
  case "2":
    subTituloA.textContent = "O que é Sql?:";
    descA.textContent =
      "SQL, ou Structured Query Language, é uma linguagem padrão usada para interagir com bancos de dados relacionais, permitindo a consulta, manipulação e definição de dados, além de fornecer controle de acesso.";
    descA2.textContent = "Desenvolvida na década de 1970, a SQL foi inicialmente chamada de SEQUEL e posteriormente abreviada para SQL. A Oracle foi a primeira a comercializar um sistema de gerenciamento de banco de dados relacional SQL .";
    subTituloB.textContent = "O que é PostgreSql?:";
    descB.textContent =
      "PostgreSQL é um banco de dados relacional de software livre com 30 anos de desenvolvimento, conhecido por sua flexibilidade e integridade. Ele suporta consultas relacionais e não relacionais, e é constantemente aprimorado por uma comunidade de mais de 600 colaboradores.";
    descB2.textContent = "Desenvolvido inicialmente em 1986 como POSTGRES por Michael Stonebraker, foi uma continuação do projeto INGRES.";
    break;
  case "3":
    descA.textContent =
      "Em 1994, o suporte para SQL foi adicionado, dando origem ao PostgreSQL.";
    tituloB.textContent = "Funções do site";
    subTituloB.textContent = "Blocos de comando:";
    descB.textContent =
      "No painel principal, você verá vários blocos de comando SQL. Para construir uma consulta SQL, basta arrastar ou clicar nesses blocos para a área de montagem na ordem correta. Combine os blocos de acordo com a tarefa dada para formar comandos SQL válidos.";
    break;
  case "4":
    subTituloA.textContent = "Consultar o Caderno:";
    descA.textContent =
      "Sempre que precisar de ajuda ou quiser revisar conceitos, clique no ícone do caderno no canto superior esquerdo da tela. Sempre que precisar de ajuda ou quiser revisar conceitos, clique no ícone do caderno no canto superior esquerdo da tela. O caderno contém explicações detalhadas sobre SQL, exemplos de comandos e dicas úteis para resolver os desafios.";
    tituloB.textContent = "Modos de Jogo";
    subTituloB.textContent = "Modo História:";
    descB.textContent =
      "Siga uma narrativa envolvente onde você enfrentará diferentes missões que irão progressivamente aumentar em dificuldade. Cada capítulo apresenta um novo cenário e conjunto de desafios que ajudarão você a aprender novos aspectos do SQL. O modo história é ideal para quem gosta de aprender em um ambiente estruturado e orientado por objetivos.";
    break;
  case "5":
    subTituloA.textContent = "Modo Livre:";
    descA.textContent =
      "Experimente e pratique suas habilidades SQL sem seguir uma história específica. É perfeito para revisar conceitos, testar novos comandos ou simplesmente praticar o que já aprendeu no modo história.";
    descA2.textContent =
      "Prepare-se para embarcar em uma aventura de aprendizado e se tornar um mestre em SQL! Boa sorte!";
    comecar.classList.remove("invisivel");
    proximo.classList.add("invisivel");
    comecar.classList.remove("invisivel");
    proximo.classList.add("invisivel");
    break;
}
