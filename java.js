//atividade
//Questão 1;
//somador de numeros;



/*
let i= (parseFloat(prompt('Quantos números você quer somar?')));

function somandoNumero(i) {
    let r = 0 // variável acumuladora 
        for (let x= 0; i > x ; x++){
         let N = (parseFloat(prompt('digite um numero')));
 
         r=(r+N); 
        }
    console.log('A soma final é..'+ r);
}
/* Atividade 1
let n = parseFloat (prompt('Quantos números você deseja somar?'));
let soma = 0;

    for (let i = 0; i < n; i++) {
        let pergunta = parseFloat (prompt ('Digite um número: '));
        soma = pergunta + soma;
    }
console.log('A soma é: ' + soma)

*/

/* Atividade 2



let intervalo = setInterval(lancamento, 1000)
let contagem = 10;

function lancamento() {
    if (contagem >= 0) {
        console.log(contagem);
        contagem--;
    } else {
        console.log('Lançamento!');
        clearInterval(intervalo);
    }
}


*/

/* Atividade 3

let ganho1 = parseFloat(prompt('Digite o ganho bruto de Janeiro: '));
let ganho2 = parseFloat(prompt('Digite o ganho bruto de Fevereiro: '));
let ganho3 = parseFloat(prompt('Digite o ganho bruto de Março: '));
let ganho4 = parseFloat(prompt('Digite o ganho bruto de Abril: '));
let ganho5 = parseFloat(prompt('Digite o ganho bruto de Maio: '));
let ganho6 = parseFloat(prompt('Digite o ganho bruto de Junho: '));
let ganho7 = parseFloat(prompt('Digite o ganho bruto de Julho: '));
let ganho8 = parseFloat(prompt('Digite o ganho bruto de Agosto: '));
let ganho9 = parseFloat(prompt('Digite o ganho bruto de Setembro: '));
let ganho10 = parseFloat(prompt('Digite o ganho bruto de Outubro: '));
let ganho11 = parseFloat(prompt('Digite o ganho bruto de Novembro: '));
let ganho12 = parseFloat(prompt('Digite o ganho bruto de Dezembro: '));

let ganhoSoma = parseFloat(ganho1 + ganho2 + ganho3 + ganho4 + ganho5 + ganho6 + ganho7 + ganho8 + ganho9 + ganho10 + ganho11 + ganho12);

let gasto1 = parseFloat(prompt('Digite o gasto bruto de Janeiro: '));
let gasto2 = parseFloat(prompt('Digite o gasto bruto de Fevereiro: '));
let gasto3 = parseFloat(prompt('Digite o gasto bruto de Março: '));
let gasto4 = parseFloat(prompt('Digite o gasto bruto de Abril: '));
let gasto5 = parseFloat(prompt('Digite o gasto bruto de Maio: '));
let gasto6 = parseFloat(prompt('Digite o gasto bruto de Junho: '));
let gasto7 = parseFloat(prompt('Digite o gasto bruto de Julho: '));
let gasto8 = parseFloat(prompt('Digite o gasto bruto de Agosto: '));
let gasto9 = parseFloat(prompt('Digite o gasto bruto de Setembro: '));
let gasto10 = parseFloat(prompt('Digite o gasto bruto de Outubro: '));
let gasto11 = parseFloat(prompt('Digite o gasto bruto de Novembro: '));
let gasto12 = parseFloat(prompt('Digite o gasto bruto de Dezembro: '));

let gastoSoma = parseFloat(gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6 + gasto7 + gasto8 + gasto9 + gasto10 + gasto11 + gasto12);

let saldo = ganhoSoma - gastoSoma
console.log('O saldo da empresa foi de: ' + saldo)

if (saldo < 0) {
    console.log('A empresa teve prejuízo.')
} else {
    console.log('A empresa teve lucro!')
}

*/

/* Atividade 4



let numeros = [];

for (let i = 0; i < 4; i++) {
  let valor = parseInt(prompt("Digite um número inteiro:"));
  numeros.push(valor);
}

numeros.sort((a, b) => b - a);

console.log('Ordem decrescente: ' + numeros.join(', '));

*/


/* Atividade 5

let n = parseFloat(prompt('Digite um número: '))

if (n % 2 === 0) {
    console.log('Este número é ímpar.')
} else {
    console.log('Este número é par.')
}

*/

/*Atividade  6

let letra = prompt('Digite uma letra:').toLowerCase();

let vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(letra)) {
    console.log('É uma vogal.');
} else {
    console.log('É uma consoante.');
}

*/

/* Atividade 7

let sabor = prompt('Digite o sabor do picolé:').toLowerCase();

let tabelaPrecos = {
  'chocolate': 1.50,
  'morango': 2.50,
  'creme': 2.50,
  'manga': 3.20,
  'melancia': 3.40,
  'vanilla ice': 3.00,
  'céu azul': 3.60,
  'brownie': 4.00,
  'hawaiano': 5.00
};

if (sabor in tabelaPrecos) {
  console.log('O valor do picolé de ' + sabor + ' é R$' + tabelaPrecos[sabor].toFixed(2));
} else {
  console.log('Sabor não encontrado.');
}

*/

/*\Atividade 8
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
  palpite = parseInt(prompt('Tente adivinhar o número entre 1 e 100:'));

  if (palpite > numeroSecreto) {
    console.log('O número é menor.');
  } else if (palpite < numeroSecreto) {
    console.log('O número é maior.');
  } else {
    console.log('Parabéns! Você acertou!');
  }

} 

/*

/* Exercício 9

let frase = prompt('Digite uma frase:');
let vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i].toLowerCase())) {
    contador++;
  }
}

console.log('Quantidade de vogais:', contador);

*/

/* Atividade 10

let senha = prompt('Digite a senha:');
let maiuscula = /[A-Z]/;
let minuscula = /[a-z]/;
let numero = /[0-9]/;
let valido = false;

if (senha.length >= 8 && maiuscula.test(senha) && minuscula.test(senha) && numero.test(senha)) {
  valido = true;
}

if (valido) {
  console.log('Senha válida!');
} else {
  console.log('Senha inválida! A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.');
}

*/

/* Atividade 11

let numero = parseFloat(prompt('Digite um número:'));

for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}

*/

/* Exercício 12

let produtos = [];
let total = 0;

for (let i = 0; i < 5; i++) {
  let nome = prompt('Digite o nome do produto:');
  let preco = parseFloat(prompt('Digite o preço do produto:'));
  produtos.push({ nome, preco });
  total += preco;
}

console.log('Lista de produtos:');
for (let produto of produtos) {
  console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
}

console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);

*/

//chamando a função
//somandoNumero(i);
//vogais.includes(letra);
//while (palpite !== numeroSecreto);;
