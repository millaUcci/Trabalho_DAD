const tituloPagina = document.getElementsByTagName("title")[0];
const tituloEx = document.getElementById("titulo");
const ultimoSave = document.getElementsByClassName("ultimo-save");
const descExercicio = document.getElementById("desc-exercicio");
const divBlocos = document.getElementById("div-blocos");
const modalSair = document.getElementById("modal-sair-exercicio");
const save = JSON.parse(localStorage.getItem("save"));
const exercicioAtual = JSON.parse(localStorage.getItem("exAtual"));
const btnSair = document.getElementById("btn-sair-exercicio");
const btnProx = document.getElementById("btn-proximo-ex");
const palavras = document.getElementsByClassName("bloco");
const btVerificar = document.getElementById("btn-verificar");
const vampiro = document.getElementById("div-vampiro");
const fala = document.getElementById("fala-vampiro");
const divFala = document.getElementById("div-fala");
const btnSairSalvar = document.getElementById("sair-e-salvar");
const btnSairSemSalvar = document.getElementById("sair-sem-salvar");
const btnSairModalSaida = document.getElementById("fechar-modal-saida");
const fundo = document.getElementById("fundo");
const divBlocosLista = [];
let qtBlocos = 0;

//modal caderno
const info = document.getElementById("info");
const modalCaderno = document.getElementById("modal-caderno");
const fecharModalCaderno = document.getElementById("fechar-modal-caderno");
const conteudo = document.getElementById("conteudo");
const tituloSql = document.getElementById("conteudo-sql");
const tituloCreate = document.getElementById("conteudo-create");
const tituloAlter = document.getElementById("conteudo-alter");
const tituloInsert = document.getElementById("conteudo-insert");
const tituloUpdate = document.getElementById("conteudo-update");
const tituloDelete = document.getElementById("conteudo-delete");
const tituloSelect = document.getElementById("conteudo-select");

const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById("fechar-modal-config");
const btnCreditos = document.getElementById("btn-creditos");
const btnRecomecar = document.getElementById("btn-recomecar");
const btnResetar = document.getElementById("btn-resetar");
const config = document.getElementById("config");
const instrucao = document.getElementById("instrucao");
const todosOsExercicios = [
  "ca1-ex1",
  "ca1-ex2",
  "ca1-ex3",
  "ca2-ex1",
  "ca3-ex1",
  "ca3-ex2",
  "ca3-ex3",
  "ca4-ex1",
  "ca5-ex1",
  "ca5-ex2",
  "ca5-ex3",
  "ca5-ex4",
];
const musica = document.getElementById("musica");
document.addEventListener("DOMContentLoaded", () => {
  const audioState = localStorage.getItem("audioState");

  if (audioState === "playing") {
    musica.currentTime = parseFloat(localStorage.getItem("audioTime")) || 0;
    musica.play();
  }

  musica.addEventListener("play", () => {
    localStorage.setItem("audioState", "playing");
  });

  musica.addEventListener("pause", () => {
    localStorage.setItem("audioState", "paused");
  });

  musica.addEventListener("timeupdate", () => {
    localStorage.setItem("audioTime", musica.currentTime);
  });
});
instrucao.addEventListener("click", () => {
  window.location.href = "../tela_instrucoes_ex/index.html";
});

config.addEventListener("click", () => {
  modalConfig.showModal();
  btnCreditos.addEventListener("click", () => {
    localStorage.setItem("save", JSON.stringify(exercicioAtual));
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

//Pegando ultimo save
ultimoSave[0].textContent = "Ultimo save: " + save;
ultimoSave[1].textContent = "Ultimo save: " + save;

//Fala vampiro
vampiro.addEventListener("click", () => {
  fala.classList.add("fala-maior");
  fala.classList.remove("fala-menor");
  falaVampiro("Não me toque", 1500);
});
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
  modalSair.showModal();
  btnSairSemSalvar.addEventListener("click", () => {
    window.location.href = "../tela_capitulos/index.html";
  });
  btnSairSalvar.addEventListener("click", () => {
    localStorage.setItem("save", JSON.stringify(exercicioAtual));
    window.location.href = "../tela_capitulos/index.html";
  });
  btnSairModalSaida.addEventListener("click", () => {
    modalSair.close();
  });
});

//Vendo o exercíco a
switch (exercicioAtual) {
  case "ca1-ex1":
    fala.classList.remove("fala-maior");
    fala.classList.add("fala-menor");
    falaVampiro(
      "Você pode usar o caderno de consultas (canto superior esquerdo) sempre que precisar",
      5000
    );
    setTimeout(segundaFala, 5500);
    function segundaFala() {
      falaVampiro(
        "Você támbem pode rever as instruções do exercício (icone da folhinha)",
        5000
      );
    }
    qtBlocos = 3;
    personalizarExercicio(
      "Use o comando create",
      "Monte abaixo o comando para criar a cidade com o nome VampCity ",
      "Capítulo1 - ex1",
      "../assets/fundos/1.png"
    );

    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("database", true, "bloco-b");
    criarBloco("vampcity;", true, "bloco-c");
    criarBloco("data", false, "");
    criarBloco("data base", false, "");
    aleatorizarBlocos();
    arrastarBloco();

    break;
  case "ca1-ex2":
    falaAleatoria();
    qtBlocos = 12;
    personalizarExercicio(
      "(Dica: Veja no caderno os tipos mais adequado para cada campo)(Dica2: todos os campos são obrigatórios) Obs: NN = notnull, PK = primary key",
      "Crie a tabela Moradores com os campos: id_morador, nome, sobrenome,  filhos, tipo_sanguineo e idade",
      "Capítulo1 - ex2",
      "../assets/fundos/2.png"
    );
    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco(";", false, "");
    criarBloco("sobrenome varchar(15) NN,", true, "bloco-g");
    criarBloco("NN,", true, "bloco-j");
    criarBloco("filhos boolean NN,", true, "bloco-h");
    criarBloco("tipo_sanguineo varchar(5)", true, "bloco-i");
    criarBloco("idade integer NN", true, "bloco-k");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("table", true, "bloco-b");
    criarBloco("moradores", true, "bloco-c");
    criarBloco("(", true, "bloco-d");
    criarBloco("id_morador integer pk nn,", true, "bloco-e");
    criarBloco(");", true, "bloco-l");
    criarBloco("nome varchar(15) NN,", true, "bloco-f");
    aleatorizarBlocos();
    arrastarBloco();

    break;
  case "ca1-ex3":
    falaAleatoria();
    qtBlocos = 11;
    personalizarExercicio(
      "(Dica: todos os campos são obrigatórios)(Dica: não esqueça de indicar os tipos de cada campo, consulte o caderno se preciso) Obs: NN = notnull, PK = primary key",
      "Para montar a tabela utilize essa ordem de campos: id, num_casa, id_morador, rua",
      "Capítulo1 - ex3",
      "../assets/fundos/3.png"
    );
    criarBloco("create table", true, "bloco-a");
    criarBloco("id,", false, "");
    criarBloco("id integer pk nn,", true, "bloco-d");
    criarBloco("num_casa,", false, "");
    criarBloco("num_casa integer nn,", true, "bloco-e");
    criarBloco("num_casa varchar(10),", false, "");
    criarBloco("casas", true, "bloco-b");
    criarBloco("(", true, "bloco-c");
    criarBloco(");", true, "bloco-k");
    criarBloco("nn", true, "bloco-j");
    criarBloco("varchar(5),", false, "");
    criarBloco("varchar(100)", true, "bloco-i");
    criarBloco("id_morador", true, "bloco-f");
    criarBloco("boolean,", false, "");
    criarBloco("integer nn,", true, "bloco-g");
    criarBloco("rua", true, "bloco-h");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca2-ex1":
    falaAleatoria();
    qtBlocos = 11;
    personalizarExercicio(
      "Com o comando ALTER, adicione o campo “cônjuge” e exclua o campo “filhos”. (Dica: conjuge estara relacionado com id_morador, logo terá o mesmo tipo)(Dica2: para poder executar mais de um comando por vez, basta acrescentar um ponto e virgula ao final do primeiro comando, para indicar que ele foi finalizado e que o que vier depois é outro comando.)",
      "Monte dois comandos para fazer as duas alterações",
      "Capítulo2 - ex1",
      "../assets/fundos/4.png"
    );
    criarBloco("varchar(5)", false, "");
    criarBloco("deletar filhos", false, "");
    criarBloco("criar conjuge", false, "");
    criarBloco("moradores", true, "bloco-h");
    criarBloco("integer", true, "bloco-d");
    criarBloco("inserir", false, "");
    criarBloco(";", true, "bloco-f");
    criarBloco("alter table", true, "bloco-g");
    criarBloco("alter", true, "bloco-a");
    criarBloco("drop", true, "bloco-i");
    criarBloco("remover", false, "");
    criarBloco("column", true, "bloco-j");
    criarBloco("table moradores add", true, "bloco-b");
    criarBloco("conjuge", true, "bloco-c");
    criarBloco("alteração", false, "");
    criarBloco("filhos;", true, "bloco-k");
    criarBloco("deletar", false, "");
    criarBloco("NN", true, "bloco-e");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca3-ex1":
    falaAleatoria();
    qtBlocos = 10;
    falaVampiro("Aqui esta tão vazio...", 4000);
    personalizarExercicio(
      "Adicione o seguinte morador: " +
        `
      id_morador: 1, nome: Dorian, sobrenome: Lestrad, tipo_sanguineo: A+, idade:34, conjuge: 2`,
      "Monte o comando para inserir o morador",
      "Capítulo3 - ex1",
      "../assets/fundos/5.png"
    );
    criarBloco("into", true, "bloco-b");
    criarBloco("1,'Dorian','Lestrad','A+',34,2", true, "bloco-i");
    criarBloco("'A-',33", false, "");
    criarBloco("moradores", true, "bloco-c");
    criarBloco("Dorian Lestrad", false, "");
    criarBloco("id_morador, nome, sobrenome,", true, "bloco-e");
    criarBloco("insert", true, "bloco-a");
    criarBloco("idade, id_morador", false, "");
    criarBloco(")", true, "bloco-g");
    criarBloco("inserir", false, "");
    criarBloco("tipo_sanguineo, idade, conjuge", true, "bloco-f");
    criarBloco("(", true, "bloco-d");
    criarBloco(");", true, "bloco-j");
    criarBloco("values(", true, "bloco-h");
    criarBloco("inserção morador", false, "");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca3-ex2":
    falaAleatoria();
    qtBlocos = 12;
    personalizarExercicio(
      "Insira a casa a partir dos dados: " +
        `
        id: 1, num_casa: 110, id_morador: 1, rua: arteriae`,
      "Monte o comando para inserir a casa",
      "Capítulo3 - ex2",
      "../assets/fundos/6.png"
    );
    criarBloco("into", true, "bloco-b");
    criarBloco("values(", true, "bloco-i");
    criarBloco("'90',33", false, "");
    criarBloco("casas", true, "bloco-c");
    criarBloco("6,331,1,'fior', 'casas'", false, "");
    criarBloco("id,", true, "bloco-e");
    criarBloco("insert", true, "bloco-a");
    criarBloco("idade, id_morador", false, "");
    criarBloco("id_morador,", true, "bloco-g");
    criarBloco("inserir", false, "");
    criarBloco("num_casa,", true, "bloco-f");
    criarBloco("(", true, "bloco-d");
    criarBloco("1,110,", true, "bloco-j");
    criarBloco("rua)", true, "bloco-h");
    criarBloco("inserir casa", false, "");
    criarBloco("1,'arteriae'", true, "bloco-k");
    criarBloco(");", true, "bloco-l");
    aleatorizarBlocos();
    arrastarBloco();

    break;
  case "ca3-ex3":
    falaAleatoria();
    qtBlocos = 12;
    falaVampiro("Felicidades ao casal", 4000);
    personalizarExercicio(
      "Atualize o campo sobrenome de Carmilla (o id_morador dela é 2) para 'Lestrad' e indique no campo 'conjuge' dela, que ela se casou com Dorian (o id_morador dele é 1)(Dica: o campo conjuge recebe o id_morador do conjuge do morador)(Dica2: não se esqueça do comando AND para atualizar mais de um campo)(Dica3: não esqueça de ultilizar o WHERE para que apenas a Carmilla seja atualizada)",
      "Atualize os campos sobrenome e conjuge da moradora Carmilla",
      "Capítulo3 - ex3",
      "../assets/fundos/6.png"
    );
    criarBloco("where", true, "bloco-j");
    criarBloco("update set", false, "");
    criarBloco("id_morador", true, "bloco-k");
    criarBloco("= 2;", true, "bloco-l");
    criarBloco("sobrenome", true, "bloco-d");
    criarBloco("atualizar", false, "");
    criarBloco("campo", false, "");
    criarBloco("update", true, "bloco-a");
    criarBloco("moradora", false, "");
    criarBloco("conjuge =", true, "bloco-h");
    criarBloco("set", true, "bloco-c");
    criarBloco("Carmilla", false, "");
    criarBloco("=", true, "bloco-e");
    criarBloco("moradores", true, "bloco-b");
    criarBloco("'Lestrad'", true, "bloco-f");
    criarBloco("and", true, "bloco-g");
    criarBloco("==", false, "");
    criarBloco("1", true, "bloco-i");
    criarBloco("atualizar", false, "");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca4-ex1":
    falaAleatoria();
    qtBlocos = 7;
    falaVampiro("Que pena, era um rapaz tão bom, tinha um sangue doce", 5000);
    personalizarExercicio(
      "O id_morador de Nathaniel era 5",
      "Delete o morador Nathaniel da tabela moradores",
      "Capítulo4 - ex1",
      "../assets/fundos/7.png"
    );
    criarBloco("delete", true, "bloco-a");
    criarBloco("onde", false, "");
    criarBloco("table", false, "");
    criarBloco("from casas", false, "");
    criarBloco("where", true, "bloco-d");
    criarBloco("id_morador", true, "bloco-f");
    criarBloco("Nathaniel", false, "");
    criarBloco("5;", true, "bloco-h");
    criarBloco("from", true, "bloco-b");
    criarBloco("moradores", true, "bloco-c");
    criarBloco("apagar", false, "");
    criarBloco("order by", false, "");
    criarBloco("deletar", false, "");
    criarBloco("=", true, "bloco-g");
    criarBloco("cinco", false, "");
    criarBloco("remover", false, "");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca5-ex1":
    falaAleatoria();
    qtBlocos = 7;
    personalizarExercicio(
      "Tente (pode usar o caderno como auxilio) fazer uma consulta que traga apenas os nomes dos moradores da tabela moradores, e outra consulta que traga todos os campos da tabela casas. (Dica: caso queria trazer todos os campos de uma tabela, use o * após o SELECT)(Dica2: separe os dois comando por ponto e vírgula)",
      "Monte as duas consultas",
      "Capítulo5 - ex1",
      "../assets/fundos/8.png"
    );
    criarBloco("table", false, "");
    criarBloco("filter", false, "");
    criarBloco("moradores", true, "bloco-d");
    criarBloco("nome", true, "bloco-b");
    criarBloco(";", true, "bloco-e");
    criarBloco("select *", true, "bloco-f");
    criarBloco("consultar", false, "");
    criarBloco("database", false, "");
    criarBloco("select", true, "bloco-a");
    criarBloco("selecionar", false, "");
    criarBloco("from", true, "bloco-c");
    criarBloco("todos", false, "");
    criarBloco("from casas;", true, "bloco-g");
    criarBloco("where", false, "");
    criarBloco("and", false, "");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca5-ex2":
    falaAleatoria();
    qtBlocos = 9;
    personalizarExercicio(
      "Agora faça uma consulta para trazer todas as informações da tabela de casas ordenada em ordem alfabética pelo nome das ruas, além disso, consulte tambem todos os moradores ordenados pela idade, do mais velho ao mais novo.(Dica: faça duas consultas separadas por ponto e virgula)",
      "Monte o comando abaixo",
      "Capítulo5 - ex2",
      "../assets/fundos/9.png"
    );
    criarBloco("selecionar", false, "");
    criarBloco("select", true, "bloco-e");
    criarBloco("ordenação", false, "");
    criarBloco("rua ordem", false, "");
    criarBloco("order by rua", true, "bloco-c");
    criarBloco("moradores", true, "bloco-g");
    criarBloco("from casas", true, "bloco-b");
    criarBloco("select tudo", false, "");
    criarBloco("order by idade", true, "bloco-h");
    criarBloco("asc;", true, "bloco-d");
    criarBloco("desc;", true, "bloco-i");
    criarBloco("em ordem", false, "");
    criarBloco("* from", true, "bloco-f");
    criarBloco(")", false, "");
    criarBloco("create", false, "");
    criarBloco("where", false, "");
    criarBloco("select *", true, "bloco-a");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca5-ex3":
    falaAleatoria();
    qtBlocos = 12;
    personalizarExercicio(
      "A consulta deve retornar todos os campos da tabela moradores, filtrada pelo tipo_sanguineo e pela idade.",
      "Monte o comando abaixo para trazer moradores do tipo B- e com menos de 30 anos",
      "Capítulo5 - ex3",
      "../assets/fundos/10.png"
    );

    criarBloco("select", true, "bloco-a");
    criarBloco("30;", true, "bloco-l");
    criarBloco("moradores", true, "bloco-d");
    criarBloco("30 anos", false, "");
    criarBloco("tanque", false, "");
    criarBloco("tipo_sanguineo", true, "bloco-f");
    criarBloco("=", true, "bloco-g");
    criarBloco("'B-'", true, "bloco-h");
    criarBloco("and", true, "bloco-i");
    criarBloco("*", true, "bloco-b");
    criarBloco("sangue", false, "");
    criarBloco("tanque", false, "");
    criarBloco("from", true, "bloco-c");
    criarBloco("idade", true, "bloco-j");
    criarBloco("where", true, "bloco-e");
    criarBloco("<", true, "bloco-k");
    aleatorizarBlocos();
    arrastarBloco();
    break;
  case "ca5-ex4":
    falaAleatoria();
    qtBlocos = 16;
    falaVampiro("Oh, meu deus, você ja esta no último exercício", 5500);
    personalizarExercicio(
      "Para o relatório traga o nome e o tipo sanguineo dos moradores ordenados pela idade (do mais novo ao mais velho), e depois faça um comando para trazer todas as casas do morador Dorian (cujo o id_morador é igual a 1) onde a rua seja igual a arteriae. Vamos lá, eu sei que você consegue",
      "Monte duas consultas para gerar um relatório aos vampiros.",
      "Capítulo5 - ex4",
      "../assets/fundos/10.png"
    );
    criarBloco("select", true, "bloco-a");
    criarBloco("relatório", false, "");
    criarBloco("id_morador", true, "bloco-l");
    criarBloco("from", true, "bloco-d");
    criarBloco("table", false, "");
    criarBloco("ordenar", false, "");
    criarBloco("AND", true, "bloco-n");
    criarBloco("rua", true, "bloco-o");
    criarBloco("moradores", true, "bloco-e");
    criarBloco("desc", false, "");
    criarBloco("<", false, "");
    criarBloco("idade", true, "bloco-g");
    criarBloco("asc;", true, "bloco-h");
    criarBloco("consultar", false, "");
    criarBloco("= 'arteriae';", true, "bloco-p");
    criarBloco("select *", true, "bloco-i");
    criarBloco("nome,", true, "bloco-b");
    criarBloco("tipo_sanguineo", true, "bloco-c");
    criarBloco("from casas", true, "bloco-j");
    criarBloco("id", false, "");
    criarBloco("where", true, "bloco-k");
    criarBloco("order by", true, "bloco-f");
    criarBloco("= 1", true, "bloco-m");
    aleatorizarBlocos();
    arrastarBloco();
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
  tituloInsert.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.add("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Algumas definições</p>
  Um dados: em sql ele pode ser representado como uma linha de uma tabela, com seus campos (colunas) e os valores destes campos
  primary key (chave primária): é um valor unico que identifica cada dado em uma tabela, nenhuma chave primária sera igual a outra, pois ela serve como um meio de identificar cada dado unicamente.
     <p class="destaque2">Tipos de campos</p>
  integer: campo numérico <br/>
  varchar(tamanho): campo de texto com tamanho definido <br/>
  boolean: campo com valor true (verdadeiro) ou false (falso)
  <p class="destaque2">Verificações: </p>
  notnull(NN): indica que o campo não pode ser nullo (vazio, sem dado) <br/>
  primary key: indica que o campo receberá o valor da chave primária da tabela, o valor unico que identificará o dado
  <br/>
  <p class="destaque2">Order by:</p>
  Order by (order por) serve para ordenar uma consulta de acordo com o valor de algum campo. Ex: eu crio uma consulta que trás todos os dados da tabela pessoa e eu ordeno o resultado pelo campo "nome" em ordem crescente (alfabética). Obs: o order permite ordenar os campos em ordem decrescente (desc) e crescente/ascendente (asc) (tanto campos varchar como os campos integer)<br/>
  Ex:<br/>
  SELECT * FROM pessoas ORDER BY nome ASC <br/>
  mostra todas as pessoas da tabela pessoas, ordenadas pelo nome em ordem alfabética.
 `;
});
tituloCreate.addEventListener("click", () => {
  tituloCreate.classList.add("selecionado");
  tituloCreate.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");
  tituloInsert.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxes dos comandos de criação:</p>
  <p class="destaque2">Database: </p>
  CREATE DATABASE &lt;nome do dataBase> <br/>

  <p class="destaque2">Tabela: </p>
  CREATE TABLE &lt;nome da tabela>(<br/>
	Campo1 &lt;tipoDoCampo> &lt;verificação>, <br/>
	Campo2 &lt;tipoDoCampo> &lt;verificação>...
  <p class="destaque2">Ex: </p>
  CREATE TABLE pessoas (<br/>
  id integer primary key notnull,<br/>
  nome varchar(100) notnull,<br/>
  idade integer notnull);<br/>
  <br/>
  Este comando esta criando a tabela pessoas, que contém os campos id: sendo um valor numérico que é a primary key da tabela, e não podendo ter um valor vazio, nome: que é um campo de texto (tamanho de 100 caracteres) que não pode ser vazio e idade: que é um campo numérico que não pode ser vazio.
);`;
});
tituloAlter.addEventListener("click", () => {
  tituloAlter.classList.add("selecionado");
  tituloAlter.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");
  tituloInsert.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxe dos comandos de alteração:</p>
    <p class="destaque2">Adicionar coluna</p>
    ALTER TABLE &lt;nomeDaTabela> ADD &lt;nomeDoCampoQueVaiSerCriado> &lt;tipoDoCampo><br/>
    <p class="destaque2">Ex:</p>
    ALTER TABLE pessoas ADD data_nascimento <br/>
    Esta adicionando um campo chamado data_nascimento na tabela pessoas

    <p class="destaque2">Deletar coluna</p>
    ALTER TABLE &lt;nomeDaTabela> DROP COLUMN &lt;nomeDoCampoQueVaiSerExcluido>
    <p class="destaque2">Ex:</p>
    ALTER TABLE pessoas DROP COLUMN idade <br/>
    Esta excluindo um campo chamado idade da tabela pessoas`;
});
tituloInsert.addEventListener("click", () => {
  tituloInsert.classList.add("selecionado");
  tituloInsert.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxes dos comandos de inserção</p>
  INSERT INTO &lt;nome da tabela> (&lt;colunas a qual os dados serão inseridos>)<br/>
VALUES (&lt;valor, valor, valor...>); <br/>
<p class="destaque2">Into:</p>
Into serve para indicar quais campos receberam os valores do Values
<p class="destaque2">Values:</p>
Serve para indicar quais valores serão inseridos
<p class="destaque2">Exemplo:</p>
INSERT INTO pessoas (nome, sobrenome, idade)  <br/>
VALUES (‘Maria’,’Fernandez’,25);  <br/>
Esta inserindo os valores: 'Maria', 'Fernandez' e 25, nos campos: nome, sobrenome e idade respectivamente na tabela pessoas.
`;
});
tituloUpdate.addEventListener("click", () => {
  tituloUpdate.classList.add("selecionado");
  tituloUpdate.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");
  tituloInsert.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de atualização</p>
  UPDATE &lt;nomeDaTabela><br/>
  SET &lt;nomeDoCampo> = &lt;novoValor>...<br/>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo><br/>
  <p class="destaque3">Where:</p>
  O where (onde) serve para localizar um ou mais dados a partir do valor de um ou mais campos. <br/>Obs: o where nunca virá sozinho, ele deve vir depois de algum comando, como o SELECT, UPDATE ou DELETE. <br/>Ex: quero localizar apenas pessoas com menos de 40 anos, então posso usar o seguinte comando: (SELECT/UPDATE/DELETE) WHERE idade < 40. Para indicar mais campos use o AND.<br/>Ex: WHERE idade < 40 AND nome = 'João'<br/>
  neste caso esta localizando os dados que tenham o campo idade menor que 40 e o campo nome igual a João
  <p class="destaque3">Set:</p>
  Indica que o valor do campo será atualizado
  <p class="destaque2">Exemplo:</p>
  Quero alterar o nome de "Maria" para "Duda" e na tabela o id (chave primária) da "Maria" é 4, logo para alterar o nome de "Maria" em específico devo usar o comando </br>
  UPDATE pessoa SET nome = "Duda" WHERE id = 4 <br/>
  <p class="importante">Caso você não use o where para fazer uma atualização ou uma deleção, TODOS os registros da tabela seram alterados/apagados</p>
`;
});
tituloDelete.addEventListener("click", () => {
  tituloDelete.classList.add("selecionado");
  tituloDelete.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloInsert.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de deleção</p>
  DELETE FROM &lt;nomeDaTabela><br/>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo>... </br>
  <p class="destaque2">Ex:</p>
  DELETE FROM pessoas
  WHERE nome = 'Pedro'<br/>
  Este comando esta deletando um dado da tabela pessoas onde o valor do campo nome seja igual a Pedoro
  <p class="importante">Não se esqueça do where, se não você irá deletar tudo da tabela</p>
`;
});
tituloSelect.addEventListener("click", () => {
  tituloSelect.classList.add("selecionado");
  tituloSelect.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloInsert.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.classList.remove("conteudo-maior");
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de seleção (consulta)</p>
  SELECT &lt;nomeDosCamposQueIraoAparecerNaConsulta><br/>
  FROM &lt;nomeDaTabela>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo>...<br/>
  <p class="destaque2">Select:</p>
  O select (selecione) serve para fazer consultas no banco, nele você indica os campos que você deseja consultar, caso você deseje trazer todos os campos apenas coloque * (asterísco)<br/>
  <p class="destaque2">From:</p>
  O from (de) indica de qual tabela virá os campos que você quer consultar<br/>
  <p class="destaque2">Obs:</p>
  Neste caso o where é opcional, se você deseja consultar dados que tenham um valor específico em um campo você pode usá-lo, caso você so deseje mostrar todos os dados da tabela, não use o where;
  <p class="destaque2">Ex:</p>
  SELECT nome, idade FROM pessoas <br/>
  WHERE idade <= 60
  AND nome = 'Will'
`;
});

//funções
function personalizarExercicio(desc, titulo, tituloPag, caminhoFundo) {
  descExercicio.textContent = desc;
  tituloEx.textContent = titulo;
  tituloPagina.textContent = tituloPag;
  fundo.setAttribute("src", caminhoFundo);
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
  divBlocosLista.push(div);
}

function aleatorizarBlocos() {
  for (let i = divBlocosLista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [divBlocosLista[i], divBlocosLista[j]] = [
      divBlocosLista[j],
      divBlocosLista[i],
    ];
  }
  for (let k = 0; k < divBlocosLista.length; k++) {
    divBlocos.appendChild(divBlocosLista[k]);
  }
}

function arrastarBloco() {
  function adicionarEventosParaPalavra(palavra) {
    palavra.addEventListener("dragstart", () => {
      palavra.classList.add("dragging");
    });

    palavra.addEventListener("dragend", () => {
      palavra.classList.remove("dragging");
    });

    palavra.addEventListener("click", () => {
      const currentlySelected = document.querySelector(".bloco.selected");
      if (currentlySelected) {
        currentlySelected.classList.remove("selected");
      }
      palavra.classList.add("selected");
    });

    palavra.addEventListener("dragover", (e) => {
      e.preventDefault();
      palavra.classList.add("dragover");
    });

    palavra.addEventListener("dragleave", () => {
      palavra.classList.remove("dragover");
    });

    palavra.addEventListener("drop", (e) => {
      e.preventDefault();
      palavra.classList.remove("dragover");
      const palavraArrastada = document.querySelector(".bloco.dragging");
      if (palavraArrastada) {
        const indexArrastada = Array.from(terminal.children).indexOf(
          palavraArrastada
        );
        const indexAlvo = Array.from(terminal.children).indexOf(palavra);
        if (indexArrastada !== -1 && indexAlvo !== -1) {
          if (indexArrastada < indexAlvo) {
            terminal.insertBefore(palavraArrastada, palavra.nextSibling);
          } else {
            terminal.insertBefore(palavraArrastada, palavra);
          }
        }
      }
    });
  }

  // Adiciona os eventos para cada palavra inicial
  Array.from(palavras).forEach(adicionarEventosParaPalavra);

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
    const palavraArrastada = document.querySelector(".bloco.dragging");
    if (palavraArrastada) {
      terminal.appendChild(palavraArrastada);
      selecionadas.push(palavraArrastada);
    }
  });

  terminal.addEventListener("click", (e) => {
    if (e.target.classList.contains("bloco")) {
      const palavraSelecionada = e.target;
      divBlocos.appendChild(palavraSelecionada);
      palavraSelecionada.classList.remove("selected");
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
    const palavraArrastada = document.querySelector(".bloco.dragging");
    if (palavraArrastada) {
      divBlocos.appendChild(palavraArrastada);
    }
  });

  divBlocos.addEventListener("click", (e) => {
    const palavraSelecionada = document.querySelector(".bloco.selected");
    if (palavraSelecionada) {
      terminal.appendChild(palavraSelecionada);
      palavraSelecionada.classList.remove("selected");
      selecionadas.push(palavraSelecionada);
    }
  });
}

btnProx.addEventListener("click", () => {
  let ultimoExercicio = false;
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
      localStorage.setItem("exAtual", JSON.stringify("ca3-ex1"));
      break;
    case "ca3-ex1":
      localStorage.setItem("exAtual", JSON.stringify("ca3-ex2"));
      break;
    case "ca3-ex2":
      localStorage.setItem("exAtual", JSON.stringify("ca3-ex3"));
      break;
    case "ca3-ex3":
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
    case "ca5-ex4":
      localStorage.setItem("save", JSON.stringify("ca5-ex4"));
      ultimoExercicio = true;
      break;
  }
  const exerciciosConcluidos = JSON.parse(localStorage.getItem("exConcluidos"));
  const qntCapitulos = todosOsExercicios.length;
  let concluiuTodos = true;
  for (let i = 0; i < qntCapitulos; i++) {
    if (!exerciciosConcluidos.includes(todosOsExercicios[i])) {
      concluiuTodos = false;
    }
  }
  if (concluiuTodos) {
    window.alert("você terminou todos os exercícios");
    window.location.href = "../tela_final/index.html";
  } else {
    if (ultimoExercicio) {
      window.alert(
        "Você terminou o último capítulo, complete os outros capítulos para finalizar o curso"
      );
      window.location.href = "../tela_capitulos/index.html";
    } else {
      window.location.href = "../tela_instrucoes_ex/index.html";
    }
  }
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
  const exerciciosConcluidos = JSON.parse(localStorage.getItem("exConcluidos"));
  btVerificar.addEventListener("click", () => {
    const resultado = terminal.children;
    if (resultado.length > 0) {
      if (verificarAtividade()) {
        terminal.classList.remove("errado");
        terminal.classList.add("certo");
        btnProx.classList.remove("invisivel");
        fala.classList.add("fala-maior");
        fala.classList.remove("fala-menor");
        falaVampiro("Parabéns, você acertou", 2000);
       const blocos = document.getElementsByClassName("bloco");
        for (let i = 0; i < blocos.length; i++) {
          const clone = blocos[i].cloneNode(true);
          clone.classList.remove("draggable");
          clone.setAttribute("draggable", "false");
          blocos[i].parentNode.replaceChild(clone, blocos[i]);
        }
        if (!exerciciosConcluidos.includes(exercicioAtual)) {
          exerciciosConcluidos.push(exercicioAtual);
          localStorage.setItem(
            "exConcluidos",
            JSON.stringify(exerciciosConcluidos)
          );
        }
      } else {
        terminal.classList.remove("certo");
        terminal.classList.add("errado");
        btnProx.classList.add("invisivel");
        fala.classList.add("fala-maior");
        fala.classList.remove("fala-menor");
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
});

adicionarEventoVerificar();

//função para apagar o bloco
function apagar() {
  const blocosParaMover = [];

  while (terminal.firstChild) {
    blocosParaMover.push(terminal.firstChild);
    terminal.removeChild(terminal.firstChild);
  }

  blocosParaMover.forEach((bloco) => divBlocos.appendChild(bloco));
}

//função da fala aleatória do vampiro
function falaAleatoria() {
  fala.classList.add("fala-maior");
  fala.classList.remove("fala-menor");
  falar = Math.random() < 0.1; //10% de chance
  falar2 = Math.random() < 0.1; // 10% de chance
  falar3 = Math.random() < 0.01; // 1% de chance
  falar4 = Math.random() < 0.01; //1% de chance
  falar5 = Math.random() < 0.1; //10% de chance
  falar6 = Math.random() < 0.005; //0,5%
  falar7 = Math.random() < 0.001; //0,1%
  falar8 = Math.random() < 0.02;
  falar9 = Math.random() < 0.005;
  falar10 = Math.random() < 0.0001;
  if (falar) {
    falaVampiro("Qual o seu tipo sanguineo?", 4000);
  }
  if (falar2) {
    falaVampiro("Sangue O- é o melhor", 4000);
  }
  if (falar3) {
    falaVampiro("Você ja jogou amor doce?", 4000);
  }
  if (falar4) {
    falaVampiro("Bora Bill", 4000);
  }
  if (falar5) {
    fala.classList.add("fala-maior");
    fala.classList.remove("fala-menor");
    falaVampiro(
      "Quando não estou caçando humanos, sou um ótimo chef de cozinha. Minha especialidade? Bife à meia-noite.",
      6000
    );
    fala.classList.remove("fala-maior");
    fala.classList.add("fala-menor");
  }
  if (falar6) {
    falaVampiro("Gente, vocês estão sentindo um cheiro estranho?", 4000);
  }
  if (falar7) {
    falaVampiro("Nossa, babilônico", 4000);
  }
  if (falar8) {
    falaVampiro("'Eu sei o que você é', 'diga', 'VAMPIRO'", 4000);
  }
  if (falar9) {
    falaVampiro("Eu tenh 17 anos a um bom tempo, um bommmm tempo", 4000);
  }
  if (falar10) {
    falaVampiro("Vota no IRenato e faz o vapo", 4000);
  }
}
