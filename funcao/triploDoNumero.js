/*Função que retorna triplo de um número.*/ 
mult(7); // Chama a função passando 7 como argumento

function mult(num1) {
    var mul = (num1 * 3); // Calcula o valor multiplicado
    console.log("O numero: " + num1 + " multiplicado por três é: " + mul);
}


function multi(num1) {
    return num1 * 3;
}

let resultado = multi(9);
console.log("O resultado dessa multiplicação é:",resultado);
