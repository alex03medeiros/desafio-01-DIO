/*Função que retorna maior de dois números*/

function maior(num1,num2){
    if(num1 > num2){
        return num1
    }
    else if(num1 == num2){
        return ("Nenhum pois ambos são iguais")
    }
    else{
        return num2
    }
}

let resultado = maior(4,1)
console.log("O maior número é:", resultado)