import { CarrinhoItem } from "./carrinhoitem.model";

export class PedidoItem {

  produtoId?: String;
 // nomeProduto: String;
 // precoProduto: String;

  quantidade: Object;
  subTotal: Object;
  preco: String;
  
/*
constructor(carrinhoItem: CarrinhoItem){
this.produtoId = carrinhoItem.id
this.nomeProduto = carrinhoItem.nomeProduto
this.precoProduto = carrinhoItem.precoProduto
}
*/

constructor(pedidoItem: PedidoItem){
  this.produtoId = pedidoItem.produtoId
  this.quantidade = pedidoItem.quantidade
  this.subTotal = pedidoItem.subTotal
  this.preco = pedidoItem.preco
}
 


}