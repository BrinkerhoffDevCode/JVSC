function VerificarSinal(numero) {
    if (numero > 0) {
        console.log('positivo');
    } else if (numero < 0) {
        console.log('negativo');
    } else {
        console.log('nulo')
    }
}

function verificarAprovacao(nota) {
    if (nota > 6) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado')
    }




}
function CoventerTemperatura(temperatura) {
    if (temperatura > 0) {
        console.log('Celsius')
    } else {
        console.log('fahrenhit')
    }
}


let text = "Somátorio";
let i = 0;
while (i < 100) {
    text += "<br>O número é" + i;
    i++;
}

function SubstituirPalavras(string) {



}

function ParaNara(parameter1, parameter2, parameter3) {
    // code to be executed
}



function SubstituirPalavras() {
    console.log("Substituir palavra azul por Vermelho")
    let texto = prompt('digite uma frase ou texto com a palavra azul:')

    console.log(texto.replace(/azul/g))

}

function TamanhoPalavras() {


}

function atividade21() {

    console.log("Soma dos Elementos de um Array");

    let valores = prompt("Digite números separados na vírgula").split
        (",").map(Number);

    console.log("Soma:", valores.reduce((acc, val) => acc + val));

}

function atividade24() {

    console.log("Capitalizar a primeira letra");
    let texto = prompt("Digite uma palavra:");
    console.log(texto.charAt(0).toUpperCase() + texto.slice(1));

}

function anoBissexto(ano) {
    console.log("Seria um Bissexto ou não?")
    let texto = prompt("Seria um Bissexto?")
    if (ano > 0) {
        console.log('True');
    }else if (ano < 0) {
        console.log('false');
    }

}

function atv19(Meridional) {
    if (0 > Meridional)


}

