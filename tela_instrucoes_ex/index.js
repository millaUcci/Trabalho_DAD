const exercicioAtual = JSON.parse(localStorage.getItem("exAtual"));
const comecar = document.getElementById("btn-comecar");
const texto = document.getElementById("instrucao");
const som = document.getElementById("som");
const titulo = document.getElementsByTagName("title")[0];
let text = "";

switch (exercicioAtual) {
  case "ca1-ex1":
    audio(8500);
    titulo.textContent = "Instruções - Capítulo 1 exercício 1";
    text =
      "Para começarmos é preciso criar a cidade onde os moradores ficaram. Usaremos o comando CREATE juntamente com a indicação de qual objeto do banco de dados será criado, que neste caso será um DATABASE.";
    break;
  case "ca1-ex2":
    audio(15000);
    titulo.textContent = "Instruções - Capítulo 1 exercício 2";
    text =
      "Agora que a cidade foi criada precisamos criar duas tabelas, uma para guardar dados sobre os moradores da cidade e outra para guardar os dados das casas dos moradores. Utilizaremos o comando CREATE com o objeto do banco de dados TABLE, seguido dos campos da tabela e do tipo de cada campo. Não esqueça de indicar que o campo id_morador é a chave primaria da tabela.";
    break;
  case "ca1-ex3":
    audio(10700);
    titulo.textContent = "Instruções - Capítulo 1 exercício 3";
    text =
      "Ainda usando os conhecimentos adquiridos no exercício anterior, crie a tabela de casas a partir das colunas dadas abaixo. Decida você mesmo o tipo e as verificações dos campos. Não se esqueça de indicar na criação que o campo id é a primary key da tabela.";
    break;
  case "ca2-ex1":
    audio(10000);
    titulo.textContent = "Instruções - Capítulo 2 exercício 1";
    text =
      "Pelo visto vamos precisar alterar a estrutura da tabela de moradores, precisamos acrescentar um campo chamado “conjuge” que receberá o id do morador com quem ele é casado. Para alterar os dados iremos utilizar o comando ALTER.";
    break;
  case "ca3-ex1":
    audio(8600);
    titulo.textContent = "Instruções - Capítulo 3 exercício 1";
    text =
      "Agora que as estruturas das tabelas estão prontas, você precisa inserir alguns moradores na cidade e suas casas. Nós usaremos o comando INSERT para inserir os dados, a seguir insira o morador indicado.";
    break;
  case "ca3-ex2":
    audio(5300);
    titulo.textContent = "Instruções - Capítulo 3 exercício 2";
    text =
      "Agora que criamos um morador precisamos criar uma casa para ele, utilize novamente o comando INSERT só que agora na tabela casas.";
    break;
  case "ca3-ex3":
    audio(22000);
    texto.classList.add("texto-pequeno")
    titulo.textContent = "Instruções - Capítulo 3 exercício 3";
    text =
      "Pelo visto teremos que atualizar um dos moradores. Usaremos o comando UPDATE seguido da tabela no qual fazemos a atualização, e com o comando SET indicaremos os campos a serem atualizados e por fim com o comando WHERE indicaremos qual dados será atualizado. Atualize o sobrenome da moradora Carmilla para 'Lestrad' pois ela casou-se com Dorian Lestrad sendo seu id_morador igual a 1 e o id_morador de Carmilla igual a 2, não se esquece de atualizar tambem o campo conjuge, indicando que ela se casou. ";
    break;
  case "ca4-ex1":
    audio(12000);
    titulo.textContent = "Instruções - Capítulo 4 exercício 1";
    text =
      "Infelizmente o morador Nathaniel faleceu, precisaremos mudar nosso banco de dados. Vamos precisar usar o comando DELETE seguido do comando FROM para indicar a tabela da qual desejamos deletar o dado, e por fim usaremos o WHERE para indicar qual é o morador em especifico que vamos deletar. ";
    break;
  case "ca5-ex1":
    audio(12000);
    titulo.textContent = "Instruções - Capítulo 5 exercício 1";
    text =
      "SELECT é o comando que serve para fazer consultas no banco de dados, nessas consultras podem ter filtros. O comando SELECT é seguido da indicação dos campos da tabela que seram mostrados na consulta, depois deve se usar o comando FROM para indicar a partir de qual tabela a consulta sera feita. ";
    break;
  case "ca5-ex2":
    audio(8000);
    titulo.textContent = "Instruções - Capítulo 5 exercício 2";
    text =
      "Agora aprenderemos a fazer consultas mostrando seus resultados ordenados, usaremos o comando ORDER BY ao final do SELECT para ordenar as informações de acordo com o valor de algum campo. ";
    break;
  case "ca5-ex3":
    audio(20800);
    texto.classList.add("texto-pequeno")
    titulo.textContent = "Instruções - Capítulo 5 exercício 3";
    text =
      "Para atender uma demanda dos vampiros você deverá ler sobre o comando WHERE em seu caderno na aba UPDATE. Os vampiros querem reabastecer o tanque de sangue B-, porém, os tanques são separados pela idade das pessoas (ex: tanque do tipo A+ tem pessoas de 15 a 25 anos), hoje eles querem apenas o sangue de pessoas com menos de 30 anos, utilize uma consulta com o comando SELECT para retornar todos os campos da tabela moradores, porém filtrada (WHERE) pelo tipo_sanguineo e pela idade.";
    break;
  case "ca5-ex4":
    audio(11000);
    titulo.textContent = "Instruções - Capítulo 5 exercício 4";
    text =
      "Para o último exercício você deve fazer uma consulta mais complexa para que os vampiros possam fazer um relatório dos moradores e das casas. Você deve ultilizar seus conhecimento sobre SELECT, ORDER BY e WHERE, você pode consultar no caderno quando precisar.";
    break;
}
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const speed = 35;

  function typeWriter() {
    if (index < text.length) {
      texto.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
function audio(tempo) {
  document.addEventListener("DOMContentLoaded", function () {
    som.play();
    setTimeout(function () {
      som.pause();
    }, tempo);
  });
}
comecar.addEventListener("click", () => {
  texto.classList.remove("texto-pequeno")
  window.location.href = "../tela_base_ex/index.html";
});
