import { Produto } from "../../produto/produto.model";

export class CarrinhoItem {

  id?: String;
  nomeProduto: String;
  precoProduto: String;

  constructor(produto: Produto) {
    this.id = produto.id;
    this.nomeProduto = produto.nomeProduto
    this.precoProduto = produto.precoProduto

 
}

 
 }


 