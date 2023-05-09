//1. No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
//Quando ele digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números por ele indicados
//Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
//O resultado deve ser: 70 

/*function somaNumeros() {
    let valor = 100;
    let soma = 0;

    while(valor !== 0) {
        valor = parseFloat(prompt("Digite um número: \n"));
        soma += valor;
    }
    return soma;
}
alert(somaNumeros());*/



//2. Escreva uma função que receba um array com números e devolva qual o maior dentro dele
//Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"
//Minha solução
/*const numeros = [100, 200, 300, 400, 500];

function devolveMaior() {
    maiorNum = Math.max.apply(null, numeros);
    return "O maior número é " + maiorNum + "."
}

console.log(devolveMaior(numeros));*/

/*Solução professor
const numeros = [23, 65, 73, 44];

function maiorNumero(numeros) {
    let maior = 0;
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] > maior) {
            maior = numeros[i];
        } 
    }
    return maior;
}
console.log(numeros);
console.log(maiorNumero(numeros));*/



//3. Considere que você tem um array com várias palavras. Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando um espaço entre elas.
//Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades"

/*const palavras = ["O", "clube", "do", "povo"];

function construirFrase(arrayPalavras) {
    let frase = "";
    for (let palavra of arrayPalavras) {
        frase = frase + " " + palavra;
    }
    return frase;
}
console.log(construirFrase(palavras).trim());*/