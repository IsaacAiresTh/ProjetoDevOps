class Produto{
    
    private nome: string;
    private preco: number;
    private codigo: number;
    private estoque: boolean;

    constructor(nome: string, preco: number, codigo: number, estoque: boolean){
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
        this.estoque = estoque;
    }

    getNome(): string{
        return this.nome;
    }

}