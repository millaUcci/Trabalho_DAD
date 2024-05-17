const tituloPagina = document.getElementsByTagName('title')[0]
const tituloEx = document.getElementById('titulo')
const descExercicio = document.getElementById('desc-exercicio')
const divBlocos = document.getElementById('div-blocos')


personalizarExercicio("Para começarmos é preciso criar a cidade onde os moradores ficaram. Usaremos o comando CREATE juntamente com a indicação de qual objeto do banco de dados será criado, que neste caso será um DATABASE.","Monte o código de criação","Capítulo1 - ex1")

function personalizarExercicio(desc, titulo, tituloPag){
    descExercicio.textContent = desc
    tituloEx.textContent = titulo
    tituloPagina.textContent = tituloPag
    criarBloco("alter",false,"")
    criarBloco("create",true,"bloco-a")
    criarBloco("objeto",false,"")
    criarBloco("criar",false,"")
    criarBloco("database",true,"bloco-b")
    criarBloco("cidade",true,"bloco-c")
    criarBloco("data",false,"")    
    criarBloco("data base",false,"")
}

function criarBloco(desc,blocoSolucao,id){
    const div = document.createElement('div')
    div.textContent= desc.toUpperCase();
    div.classList.add('bloco')
    if(blocoSolucao){
        div.setAttribute('id',id)
    }
    divBlocos.appendChild(div)
}