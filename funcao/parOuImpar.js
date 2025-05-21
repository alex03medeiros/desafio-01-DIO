/*Função que verifica se número é par.*/

function par(numero1){
    if ((numero1%2) == 0){
        return (`O numero ${numero1} é par!`)
    }
    else{
        return (`O numero ${numero1} é impar!`)
    }
}

let numero = par(3)
console.log (numero)