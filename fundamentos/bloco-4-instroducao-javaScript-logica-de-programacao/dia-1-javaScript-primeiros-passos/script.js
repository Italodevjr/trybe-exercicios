const a = 10;
const b = 20;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//2.Retornando o maior valor de dois números.
if (a > b){
    console.log("A é maior que B")
}else{
    console.log("B é maior que A")
}

//3.Retornando o maior valor de três números.
const c = 80;
const d = 70;
const e = 40;

if(c > d && c > e){
    console.log("C é o maior numero")
}else if(d > e && d > c){
    console.log("D é o maior numero")
}else{
    console.log("E é o maior numero")
}

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const numero = 10;

if(numero > 0){
    console.log("Positivo");
}else if(numero < 0){
    console.log("Negativo");
}else{
    console.log("Zero");
}
