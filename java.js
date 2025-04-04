//atividade
//Questão 1;
//somador de numeros;



let i= (parseFloat(prompt('Quantos números você quer somar?')));

function somandoNumero(i) {
    let r = 0 // variável acumuladora 
        for (let x= 0; i > x ; x++){
         let N = (parseFloat(prompt('digite um numero')));
 
         r=(r+N); 
        }
    console.log('A soma final é..'+ r);
}
//chamando a função
somandoNumero(i)