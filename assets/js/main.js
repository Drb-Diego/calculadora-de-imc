//capiturando os botoes
let botaoEnviar = document.querySelector("#calcular-imc");

let botaoLimpar = document.querySelector("#limpar");

botaoLimpar.addEventListener("click", event =>{
   
   event.preventDefault();
   limpaResultado();
});

// Escutador de eventos, para fazer o calculo do imc
botaoEnviar.addEventListener("click", event => {

   event.preventDefault();

   //Capturando valor do peso
   let peso = document.querySelector("#peso").value;

   //Capturando valor da altura
   let altura = document.querySelector("#altura").value;


   let pesoEhvalido = true;
   let alturaEhvalida = true;

   if (peso > 595 || peso < 2 || altura > 238 || altura < 72) {
      pesoEhvalido = false;
      alturaEhvalida = false;
      alert("Altura ou peso invalido");
   }
   if (pesoEhvalido && alturaEhvalida) {

      //Casas decimais para pular
      let casasDecimais = 10000;

      //Fazendo o cauculo do imc (funcionando)
      let imc = peso / (altura * altura);
      imc = imc * casasDecimais;
      imc = imc.toFixed(1);

      let { resultado,status } = validaImc(imc);
      criarParagrafo(resultado, status);

   }

});

function criarParagrafo(string, status) {

   //capturando div resultado
   let divResultado = document.querySelector("#resultado");

   //Criando o paragrafo e adicinando uma classe a ele 
   let paragrafo = document.createElement("p");

   if (status === "abaixo-do-peso") {
      paragrafo.className = "cuidado";
      paragrafo.textContent = string;
   } else

   if (status === "peso-normal") {

      paragrafo.className = "paragrafo-resultado";
      paragrafo.textContent = string;
   } else

   if (status === "sobrepeso") {
      paragrafo.className = "cuidado";
      paragrafo.textContent = string;
   } else {
      paragrafo.className = "bad";
      paragrafo.textContent = string;
   }

   divResultado.appendChild(paragrafo);
}

function validaImc(imc) {
   let resultadoFinal = {};

   if (imc < 18.5) {
      resultadoFinal.status = "abaixo-do-peso";
      resultadoFinal.resultado = `${imc} Abaixo do peso`
      return resultadoFinal;

   } else

   if (imc == 18.5 || imc < 24.9) {
      resultadoFinal.status = "peso-normal";
      resultadoFinal.resultado = `${imc} Peso normal`;
      return resultadoFinal;

   } else

   if (imc == 25 || imc < 29.9) {
      resultadoFinal.status = "sobrepeso";
      resultadoFinal.resultado = `${imc} Sobrepeso`;
      return resultadoFinal;

   } else

   if (imc == 30 || imc < 34.9) {
      resultadoFinal.status = "obesidade";
      resultadoFinal.resultado = `${imc} Obesidade grau 1`;
      return resultadoFinal;

   } else

   if (imc == 35 || imc < 39.9) {
      resultadoFinal.status = "obesidade";
      resultadoFinal.resultado = `${imc} Obesidade grau 2`;
      return resultadoFinal;
   } else {
      resultadoFinal.status = "obesidade";
      resultadoFinal.resultado = `${imc} Obesidade grau 3`;
      return resultadoFinal;
   }

}

function limpaResultado(){


   // Removendo um elemento específico quando se conhece seu pai
   let divResultado = document.getElementById("resultado");
   let paragrafo = document.getElementsByTagName("p");
   divResultado = divResultado.removeChild(paragrafo[0]);


}