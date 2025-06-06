let nome: string = "Lucas";
let idade: number = 25;
let preco: number = 20.50;
let ativo: boolean = true;
let x: unknown = "qualque coisa";

idade = 18;

x = 8;

let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros[1]);



// Tuplas
let carros: [string, number][] = [["Civic", 2020], ["Fusca", 1970], ["Kwid", 2022]];
console.log(carros[0][0]); // Civic
console.log(carros[0][1]); // 2020          


type  Pessoa = {
    nome: string;
    idade:number | string;
    signo?: string;

    veiculo?: {
        nome: string;
        modelo: string;
        ano: number | string;
    }
    
}


const p: Pessoa = {
    nome: "Joao",
    idade: 18,

}

console.log(p.nome);
console.log(p.idade);
console.log(p.signo);

type Veiculo = {
    nome: string;
    modelo?: string;
    ano: number | string;
}


const carro: Veiculo = {
    nome: "Astra",
    modelo: "2008",
    ano: 2008
}


//Generics
function soma<t>(a: t, b: t): any{
    return (a as any) + (b as any);
}

let resultado = soma<number>(2, 5);
let resultado2 = soma<string>("2", "5");
console.log(resultado);
console.log(resultado2);


export {};

