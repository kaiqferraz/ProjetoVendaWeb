import { Produto } from "../produto/produto.model";

export class PedidoItemVenda {

  id?: String;
  produto: Produto[];
  quantidade: String;

constructor(pedidoItem: PedidoItemVenda){
  this.id = pedidoItem.id
  this.quantidade = pedidoItem.quantidade
  this.produto = pedidoItem.produto
}
 


}