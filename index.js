"use strict";
exports.__esModule = true;
var nome = "Lucas";
var idade = 25;
var preco = 20.50;
var ativo = true;
var x = "qualque coisa";
idade = 18;
x = 8;
var numeros = [1, 2, 3, 4, 5];
console.log(numeros[1]);
// Tuplas
var carros = [["Civic", 2020], ["Fusca", 1970], ["Kwid", 2022]];
console.log(carros[0][0]); // Civic
console.log(carros[0][1]); // 2020          
var p = {
    nome: "Joao",
    idade: 18
};
console.log(p.nome);
console.log(p.idade);
console.log(p.signo);
var carro = {
    nome: "Astra",
    modelo: "2008",
    ano: 2008
};
//Generics
function soma(a, b) {
    return a + b;
}
var resultado = soma(2, 5);
var resultado2 = soma("2", "5");
console.log(resultado);
console.log(resultado2);
