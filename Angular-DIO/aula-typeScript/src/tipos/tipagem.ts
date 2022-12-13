//Tipos primitivos: boolean, number, string
let ligado:boolean = false
let nome:string = "Joaquina"
let idade:number = 300

//Tipos Especiais: null && undefined
let nulo:null = null
let indefinido:undefined = undefined

//Tipos Abrangentes: any && void
let retorno:void
let retornoView:any = false

//Objeto - sem previsibilidade
let produto:object = {
    name:"Felipe",
    cidade:"São Paulo",
    idade:30,
};

//Objeto Tipado - com previsibilidade
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 300,
    unidades: 1
};

console.log(meuProduto);