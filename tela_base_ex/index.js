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
const vampiro = document.getElementById("vampiro");
const fala = document.getElementById("fala-vampiro");
const divFala = document.getElementById("div-fala");
const btnSairSalvar = document.getElementById("sair-e-salvar");
const btnSairSemSalvar = document.getElementById("sair-sem-salvar");
const btnSairModalSaida = document.getElementById("fechar-modal-saida");
const fundo = document.getElementById("fundo");
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
const tituloSelect = document.getElementById("conteudo-select")

const modalConfig = document.getElementById("modal-config");
const fecharModalConfig = document.getElementById("fechar-modal-config");
const btnCreditos = document.getElementById("btn-creditos");
const btnRecomecar = document.getElementById("btn-recomecar");
const btnResetar = document.getElementById("btn-resetar");
const config = document.getElementById("config");
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

//Pegando ultimo save
ultimoSave[0].textContent = "Ultimo save: " + save;
ultimoSave[1].textContent = "Ultimo save: " + save;

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
    qtBlocos = 3;
    personalizarExercicio(
      "Para começarmos é preciso criar a cidade onde os moradores ficaram. Usaremos o comando CREATE juntamente com a indicação de qual objeto do banco de dados será criado, que neste caso será um DATABASE.",
      "Monte abaixo o comando para criar a cidade com o nome “VampCity ",
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
    arrastarBloco();

    break;
  case "ca1-ex2":
    qtBlocos = 13;
    personalizarExercicio(
      "Agora que a cidade foi criada precisamos criar duas tabelas, uma para guardar dados sobre os moradores da cidade e outra para guardar os dados das casas dos moradores. Utilizaremos o comando CREATE com o objeto do banco de dados TABLE, seguido dos campos da tabela e do tipo de cada campo. (Dica: Veja no caderno os tipos mais adequado para cada campo)(dica: todos os campos são obrigatórios) Obs: NN = notnull, PK = primary key",
      "Crie a tabela Moradores com os campos: id_morador, nome, sobrenome,  filhos, tipo_sanguineo e idade",
      "Capítulo1 - ex2",
      "../assets/fundos/2.png"
    );
    criarBloco("alter", false, "");
    criarBloco("create", true, "bloco-a");
    criarBloco(";", false, "");
    criarBloco("sobrenome varchar(15) NN,", true, "bloco-h");
    criarBloco("NN,", true, "bloco-k");
    criarBloco("filhos integer NN,", true, "bloco-i");
    criarBloco("tipo_sanguineo varchar(5)", true, "bloco-j");
    criarBloco("idade integer NN", true, "bloco-l");
    criarBloco("objeto", false, "");
    criarBloco("criar", false, "");
    criarBloco("table", true, "bloco-b");
    criarBloco("moradores", true, "bloco-c");
    criarBloco("data base,", false, "");
    criarBloco("(", true, "bloco-d");
    criarBloco("id_morador integer NN", true, "bloco-e");
    criarBloco(");", true, "bloco-m");
    criarBloco("PK,", true, "bloco-f");
    arrastarBloco();
    criarBloco("nome varchar(15) NN,", true, "bloco-g");
    break;
    case "ca1-ex3":
      qtBlocos = 12;
      personalizarExercicio(
        "Ainda usando os conhecimentos adquiridos no exercício anterior, crie a tabela de casas a partir das colunas dadas abaixo. Decida você mesmo o tipo e as verificações dos campos. (dica: todos os campos são obrigatórios) Obs: NN = notnull, PK = primary key",
        "Para montar a tabela utilize essa ordem de campos: id, num_casa, id_morador, rua",
        "Capítulo1 - ex3",
        "../assets/fundos/3.png"
      );
      criarBloco("create table", true, "bloco-a");
      criarBloco("id integer,", false, "");
      criarBloco("id integer nn,", true, "bloco-d");
      criarBloco("pk,",true,"bloco-e")
      criarBloco("num_casa integer,", false, "");
      criarBloco("num_casa integer nn,", true, "bloco-f");
      criarBloco("num_casa varchar(10),", false, "");
      criarBloco("casas", true, "bloco-b");
      criarBloco("(", true, "bloco-c");
      criarBloco(");",true,"bloco-l")
      criarBloco("nn", true, "bloco-k");
      criarBloco("varchar(5),", false, "");
      criarBloco("varchar(100)", true, "bloco-j");
      criarBloco("id_morador", true, "bloco-g");
      criarBloco("boolean,", false, "");
      criarBloco("integer nn,", true, "bloco-h");
      criarBloco("rua", true, "bloco-i");
      arrastarBloco();
      break;
  //responsavel pelo cap2 ex1: samira
  case "ca2-ex1":
    qtBlocos = 11;
    personalizarExercicio(
      "Pelo visto vamos precisar alterar a estrutura da tabela de moradores, precisamos acrescentar um campo chamado “conjuge” que receberá o id do morador com quem ele é casado. Para alterar dados iremos utilizar o comando ALTER. Agora, adicione o campo “cônjuge” e exclua o campo “filhos”. (Dica: conjuge estara relacionado com id_morador, logo terá o mesmo tipo)(Dica2: para poder executar mais de um comando por vez, basta acrescentar um ponto e virgula ao final do primeiro comando, para indicar que ele foi finalizado e que o que vier depois é outro comando.)",
      "Monte os comandos para fazer as duas alterações",
      "Capítulo2 - ex1",
      "../assets/fundos/4.png"
    );
    criarBloco("varchar(5)",false,"")
    criarBloco("deletar filhos",false,"")
    criarBloco("criar conjuge",false,"")
    criarBloco("moradores",true,"bloco-h")
    criarBloco("integer",true,"bloco-d")
    criarBloco("inserir",false,"")
    criarBloco(";",true,"bloco-f")
    criarBloco("alter table",true,"bloco-g")
    criarBloco("alter",true,"bloco-a")
    criarBloco("drop",true,"bloco-i")
    criarBloco("remover",false,"")
    criarBloco("column",true,"bloco-j")
    criarBloco("table moradores add",true,"bloco-b")
    criarBloco("conjuge",true,"bloco-c")
    criarBloco("alteração",false,"")
    criarBloco("filhos;",true,"bloco-k")
    criarBloco("deletar",false,"")
    criarBloco("NN",true,"bloco-e")
 
    arrastarBloco();
    break;
  //responsavel pelo cap3 ex1: samira
  case "ca3-ex1":
    qtBlocos = 10;
    personalizarExercicio(
      "Agora que as estruturas das tabelas estão prontas, você precisa inserir alguns moradores na cidade e suas casas. Nós usaremos o comando INSERT. Usando o conteúdo do caderno insira o seguinte morador: "+`
      id_morador: 1, nome: Dorian, sobrenome: Lestrad, tipo_sanguineo: A+, idade:34, conjuge: 2`,
      "Monte o comando para inserir o morador",
      "Capítulo3 - ex1",
      "../assets/fundos/5.png"
    );
    criarBloco("into", true, "bloco-b");
    criarBloco("1,'Dorian','Lestrad','A+',34,2", true, "bloco-i");
    criarBloco("'A-',33",false,"")
    criarBloco("moradores", true, "bloco-c");
    criarBloco("Dorian Lestrad",false,"")
    criarBloco("id_morador, nome, sobrenome,", true, "bloco-e");
    criarBloco("insert", true, "bloco-a");
    criarBloco("idade, id_morador",false,"")
    criarBloco(")", true, "bloco-g");
    criarBloco("inserir",false,"")
    criarBloco("tipo_sanguineo, idade, conjuge", true, "bloco-f");
    criarBloco("(", true, "bloco-d");
    criarBloco(");", true, "bloco-j");
    criarBloco("values(", true, "bloco-h");
    criarBloco("inserção morador",false,"")
    arrastarBloco();
    break;
  case "ca3-ex2":
    qtBlocos = 1;
    personalizarExercicio(
      "teste ca3 ex2",
      "bjdbDWVCBDLKVKBD",
      "Capítulo3 - ex2",
      "../assets/fundos/6.png"
    );
    criarBloco("IOEFNVAEFN", true, "bloco-a");
    arrastarBloco();
    break;
  case "ca3-ex3":
    qtBlocos = 1;
    personalizarExercicio(
      "teste ca3 ex3",
      "bjdbDWVCBDLKVKBD",
      "Capítulo3 - ex3",
      "../assets/fundos/6.png"
    );
    criarBloco("IOEFNVAEFN", true, "bloco-a");
    arrastarBloco();
    break;
  case "ca4-ex1":
    qtBlocos = 1;
    personalizarExercicio(
      "teste ca4 ex1",
      "bjdbDWVCBDLKVKBD",
      "Capítulo4 - ex1",
      "../assets/fundos/7.png"
    );
    criarBloco("IOEFNVAEFN", true, "bloco-a");
    arrastarBloco();
    break;
  case "ca5-ex1":
    qtBlocos = 1;
    personalizarExercicio(
      "teste ca5 ex1",
      "bjdbDWVCBDLKVKBD",
      "Capítulo5 - ex1",
      "../assets/fundos/8.png"
    );
    criarBloco("IOEFNVAEFN", true, "bloco-a");
    arrastarBloco();
    break;
  case "ca5-ex2":
    qtBlocos = 15;
    personalizarExercicio(
      "Ordene as informações da tabela casas pela ordem alfabética das ruas, além disso, ordene os moradores pela sua idade, do mais velho ao mais novo.",
      "Monte o comando abaixo",
      "Capítulo5 - ex2",
      "../assets/fundos/9.png"
    );
    criarBloco("SELECT", true, "bloco-a");
    criarBloco("*", true, "bloco-b");
    criarBloco("FROM", true, "bloco-c");
    criarBloco("casas", true, "bloco-d");
    criarBloco("ORDER BY", true, "bloco-e");
    criarBloco("rua", true, "bloco-f");
    criarBloco(";", true, "bloco-g");
    criarBloco("SELECT", true, "bloco-h");
    criarBloco("*", true, "bloco-i");
    criarBloco("FROM", true, "bloco-j");
    criarBloco("casas", true, "bloco-k");
    criarBloco("ORDER BY", true, "bloco-l");
    criarBloco("idade", true, "bloco-m");
    criarBloco("DESC", true, "bloco-n");
    criarBloco(";", true, "bloco-o");
    arrastarBloco();
    break;
  case "ca5-ex3":
    qtBlocos = 1;
    personalizarExercicio(
      "Os vampiros querem reabastecer o tanque de sangue B-, porém, os tanques são separados por faixa etária, hoje eles querem apenas o sangue de pessoas com menos de 30 anos, utilize uma query para retornar id_morador, nome, sobrenome, tipo_sanguineo e idade de alguém com essas características. ",
      "Monte o comando abaixo",
      "Capítulo5 - ex3",
      "../assets/fundos/10.png"
    );
    
    criarBloco("(SELECT", true, "bloco-a");
    criarBloco("id_morador, nome, sobrenome, tipo_sanguineo, idade", true, "bloco-a");
    criarBloco("FROM", true, "bloco-a");
    criarBloco("moradores", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("idade < 30", true, "bloco-a");
    criarBloco("AND", true, "bloco-a");
    criarBloco("tipo_sanguineo = 'B-')", true, "bloco-a");
    criarBloco("(", true, "bloco-a");
    criarBloco("SELECT", true, "bloco-a");
    criarBloco("*", true, "bloco-a");
    criarBloco("FROM", true, "bloco-a");
    criarBloco("casas", true, "bloco-a");
    criarBloco("", true, "bloco-a");
    criarBloco("(", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("WHERE", true, "bloco-a");
    criarBloco("(select * from casas where id_morador = 2")
    arrastarBloco();
    break;
  //responsavel pelo cap5 ex4: samira
  case "ca5-ex4":
    qtBlocos = 1;
    personalizarExercicio(
      "teste ca5 ex4",
      "bjdbDWVCBDLKVKBD",
      "Capítulo5 - ex4",
      "../assets/fundos/10.png"
    );
    criarBloco("IOEFNVAEFN", true, "bloco-a");
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
  conteudo.innerHTML = `<p class="destaque">Algumas definições</p>
  primary key: é um valor unico que identifica cada dado em uma tabela
     <p class="destaque2">Tipos de campos</p>
  integer: campo numérico <br/>
  varchar(tamanho): campo de texto com tamanho definido <br/>
  boolean: campo com valor true ou false
  <p class="destaque2">Verificações: </p>
  notnull(NN): campo não pode ser nullo (vazio) <br/>
  unique: o valor do campo será unico <br/>
  primary key: o campo receberá o valor da chave primária da tabela
  <br/>
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
  tituloSelect.classList.remove("selecionado")

  tituloSql.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.innerHTML = `<p class="destaque">Sintaxes dos comandos de criação:</p>
  <p class="destaque2">Database: </p>
  CREATE DATABASE &lt;nome do dataBase> <br/>

  <p class="destaque2">Tabela: </p>
  CREATE TABLE &lt;nome da tabela>(<br/>
	Campo1 &lt;tipoDoCampo> &lt;verificação>, <br/>
	Campo2 &lt;tipoDoCampo> &lt;verificação>, <br/>
	...
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
  tituloSelect.classList.remove("selecionado")

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloInsert.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.innerHTML = `<p class="destaque">Sintaxe dos comandos de alteração:</p>
    <p class="destaque2">Adicionar coluna</p>
    ALTER TABLE &lt;nomeDaTabela> ADD &lt;nomeDoCampoQueVaiSerCriado> &lt;tipoDoCampo>

    <p class="destaque2">Deletar coluna</p>
    ALTER TABLE &lt;nomeDaTabela> DROP COLUMN &lt;nomeDoCampoQueVaiSerExcluido>`;
});
tituloInsert.addEventListener("click", () => {
  tituloInsert.classList.add("selecionado");
  tituloInsert.classList.remove("sem-selecao");

  tituloSql.classList.remove("selecionado");
  tituloCreate.classList.remove("selecionado");
  tituloAlter.classList.remove("selecionado");
  tituloDelete.classList.remove("selecionado");
  tituloUpdate.classList.remove("selecionado");
  tituloSelect.classList.remove("selecionado")

  tituloSql.classList.add("sem-selecao");
  tituloCreate.classList.add("sem-selecao");
  tituloAlter.classList.add("sem-selecao");
  tituloDelete.classList.add("sem-selecao");
  tituloUpdate.classList.add("sem-selecao");
  tituloSelect.classList.add("sem-selecao");

  conteudo.classList.add("selecionado");
  conteudo.innerHTML = `<p class="destaque">Sintaxes dos comandos de inserção</p>
  INSERT INTO &lt;nome da tabela> (&lt;colunas a qual os dados serão inseridos>)<br/>
VALUES (&lt;valor, valor, valor...>); <br/>
<p class="destaque2">Into:</p>
Into serve para indicar quais campos receberam os valores do Values
<p class="destaque2">Values:</p>
Serve para indicar quais valores serão inseridos
<p class="destaque2">Exemplo:</p>
INSERT INTO pessoa (nome, sobrenome, idade)  <br/>
VALUES (‘Maria’,’Fernandez’,25);  <br/>
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
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de atualização</p>
  UPDATE &lt;nomeDaTabela><br/>
  SET &lt;nomeDoCampo> = &lt;novoValor>...<br/>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo><br/>
  <p class="destaque3">Where:</p>
  O where (onde) serve para localizar um dado em específico a partir do valor da sua chave primária<br/>
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
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de deleção</p>
  DELETE &lt;nomeDaTabela><br/>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo>...
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
  conteudo.innerHTML = `<p class="destaque">Sintaxe do comando de seleção (consulta)</p>
  SELECT &lt;nomeDosCamposQueIraoAparecerNaConsulta><br/>
  FROM &lt;nomeDaTabela>
  WHERE &lt;nomeDoCampo> = &lt;valorDoCampo>...<br/>
  <p class="destaque3">Select:</p>
  O select (selecione) serve para fazer consultas no banco, nele você indica os campos que você deseja consultar, caso você deseje trazer todos os campos apenas coloque * (asterísco)<br/>
  <p class="destaque3">From:</p>
  O from (de) indica de qual tabela virá os campos que você quer consultar<br/>
  <p class="destaque3">Obs:</p>
  Neste caso o where é opcional, se você deseja consultar dados que tenham um valor específico em um campo você pode usá-lo, caso você so deseje mostrar todos os dados da tabela, não use o where;
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
      window.location.reload();
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
        falaVampiro("Parabéns você acertou", 2000);
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
