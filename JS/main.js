const robotron =  document.querySelector("#robotron");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const img = document.querySelector("#robotron");
const pasta = document.querySelector("[data-pasta]")

const cores = ["Amarelo","Azul","Branco","Preto","Rosa","Vermelho"];
var indice = 0;
//Isso é um Objeto/Array
const pecas = {
    "bracos":{
       "forca":29,
       "poder":35,
       "energia":-21,
       "velocidade":-5
    },
    "blindagem":{
        "forca":41,
        "poder":20,
        "energia":0,
        "velocidade":-20
    },
    "nucleos":{
        "forca":0,
        "poder":7,
        "energia":48,
        "velocidade":-4
    },
    "pernas":{
        "forca":27,
        "poder":21,
        "energia":-32,
        "velocidade":43
    },
    "foguetes":{
        "forca":0,
        "poder":28,
        "energia":0,
        "velocidade":-2
    }


}

// somar.addEventListener("click", (evento) => {
//     manipulaDados("somar");
// });

// subtrair.addEventListener("click", (evento) =>{
//   
//     manipulaDados("subtrair");
// 
//  });


controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //Conteudo da Tag
        // console.log(evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca);

    });
});


function atualizaEstatisticas(peca) {
  //  console.log(pecas[peca]);
    estatisticas.forEach ( (elemento) =>{
        // console.log(elemento.dataset.estatistica);
        // console.log(elemento.textContent);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}


function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    console.log(peca);


    if(operacao === "subtrair" || operacao === "-") {
        if(parseInt(peca.value) > 0){
        parseInt(peca.value--);
        }
    } else{
        parseInt(peca.value++);
    }
}


robotron.addEventListener("click",  (evento) => {
    if(indice >= cores.length){
        indice = 0;
    }
    img.src = (evento.target.dataset.pasta + cores[indice] +"/robotron.png")
    // img.src = (evento.target.dataset.pasta + );
    // img.src = "";
    // console.log(evento);
    //console.log("O robô foi selecionado");    
    indice++;
});



// function dizOla(nome) {
//     console.log("Olá, " + nome + "!!");
//     console.log("Bem-vindo ao Robo 2000");
// }

// dizOla("Enzo");
// dizOla("Thiago");
// dizOla("Kayky");



