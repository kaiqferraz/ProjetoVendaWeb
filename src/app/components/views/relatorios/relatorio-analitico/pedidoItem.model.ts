import { Produto } from "../../produto/produto.model";

export class PedidoItem {

  id?: String;
  produto: Produto[];
  quantidade: Object;
  subTotal: Object;
  preco: String;
  
constructor(pedidoItem: PedidoItem){
  this.id = pedidoItem.id
  this.quantidade = pedidoItem.quantidade
  this.subTotal = pedidoItem.subTotal
  this.preco = pedidoItem.preco
  this.produto = pedidoItem.produto
}
 


}