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
const tituloB = document.getElementById("titulo-b");
const subTituloA = document.getElementById("sub-titulo-a");
const subTituloB = document.getElementById("sub-titulo-b");
const descA = document.getElementById("desc-a");
const descB = document.getElementById("desc-b");
let mudanca = 0;

ultimoSave.textContent = "Ultime save: " + save;

const comecar = document.getElementById("btn-comecar");
comecar.addEventListener("click", () => {
  window.location.href = "../tela_capitulos/index.html";
});

const proximo = document.getElementById("btn-proximo");
proximo.addEventListener("click", () => {
  let paginaAtualTemp = parseInt(paginaAtual) + 1;
  localStorage.setItem("pagina", JSON.stringify(paginaAtualTemp));
  window.location.reload();
});
const voltar = document.getElementById("btn-voltar-pagina");
if(paginaAtual!=1){
    voltar.classList.remove("invisivel")
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
      "Em 1905 Klaus se tornou um vampiro em uma pequena cidade de São Paulo, e começou a trabalhar em uma grande empresa clandestina de sangue fresco, inteiramente coordenada por vampiros. No século atual, ele se tornou um gerente e recebeu a missão de organizar os dados dos moradores da cidade – a fonte do sangue - em um banco de dados SQL, você irá ajuda-lo (apenas cuidado com as presas dele). Para que você o ajude, lhe apresentamos as seguintes instruções: ";

    tituloB.textContent = "Introdução:";
    subTituloB.textContent = "O que é um banco de dados?";
    descB.textContent =
      "Um banco de dados é uma coleção organizada de informações armazenadas eletronicamente, geralmente gerenciada por um sistema de gerenciamento de banco de dados (SGDB). Os dados são estruturados em tabelas de linhas e colunas para facilitar o processamento e a consulta. Um tipo comum é o banco de dados relacional, onde os dados são organizados em tabelas e as ";
    break;
  case "2":
    tituloA.textContent = "Introducão:";
    descA.textContent =
      "relações entre os pontos de dados são estabelecidas por meio de chaves únicas e atributos. Cada linha de uma tabela representa um registro, e cada coluna contém um atributo específico dos dados, permitindo consultas eficientes e uma representação intuitiva das informações.";
    tituloB.textContent = "O que é Sql?:";
    descB.textContent =
      "SQL, ou Structured Query Language, é uma linguagem padrão usada para interagir com bancos de dados relacionais, permitindo a consulta, manipulação e definição de dados, além de fornecer controle de acesso. Desenvolvida na década de 1970, a SQL foi inicialmente chamada de SEQUEL e posteriormente abreviada para SQL. A Oracle foi a primeira a comercializar um sistema de gerenciamento de banco de dados relacional SQL .";
    break;
  case "3":
    tituloA.textContent = "O que é PostgreSql:";
    descA.textContent =
      "PostgreSQL é um banco de dados relacional de software livre com 30 anos de desenvolvimento, conhecido por sua flexibilidade e integridade. Ele suporta consultas relacionais e não relacionais, e é constantemente aprimorado por uma comunidade de mais de 600 colaboradores. Desenvolvido inicialmente em 1986 como POSTGRES por Michael Stonebraker, foi uma continuação do projeto INGRES.";
    descB.textContent =
      "Em 1994, o suporte para SQL foi adicionado, dando origem ao PostgreSQL.";
    break;
  case "4":
    tituloA.textContent = "Arrastar e Soltar Blocos:";
    descA.textContent =
      "No painel principal, você verá vários blocos de comando SQL. Para construir uma consulta SQL, basta arrastar esses blocos para a área de montagem na ordem correta. Combine os blocos de acordo com a tarefa dada para formar comandos SQL válidos.";
    tituloB.textContent = "Consultar o Caderno:";
    descB.textContent =
      "Sempre que precisar de ajuda ou quiser revisar conceitos, clique no ícone do caderno no canto superior esquerdo da tela. O caderno contém explicações detalhadas sobre SQL, exemplos de comandos e dicas úteis para resolver os desafios.";
    break;
  case "5":
    tituloA.textContent = "Modos de Jogo";
    subTituloA.textContent = "Modo História:";
    descA.textContent =
      "Siga uma narrativa envolvente onde você enfrentará diferentes missões que irão progressivamente aumentar em dificuldade. Cada capítulo apresenta um novo cenário e conjunto de desafios que ajudarão você a aprender novos aspectos do SQL. O modo história é ideal para quem gosta de aprender em um ambiente estruturado e orientado por objetivos.";
    subTituloB.textContent = "Modo Livre:";
    descB.textContent =
      "Experimente e pratique suas habilidades SQL sem seguir uma história específica. É perfeito para revisar conceitos, testar novos comandos ou simplesmente praticar o que já aprendeu no modo história.";
    break;
  case "6":
    tituloA.textContent = "Experimentação:";
    descA.textContent =
      "Não tenha medo de experimentar diferentes combinações de blocos. O erro é uma parte essencial do aprendizado, e você sempre pode reajustar os blocos até encontrar a solução correta";
    descB.textContent =
      "Prepare-se para embarcar em uma aventura de aprendizado e se tornar um mestre em SQL! Boa sorte!";
    comecar.classList.remove("invisivel");
    proximo.classList.add("invisivel");
    break;
}
