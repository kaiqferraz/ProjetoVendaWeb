import { ItemPedidoDTO } from "./item-pedido";
import { RefDTO } from "./ref.dto";

export interface  Pedido {

  cliente: RefDTO;
  itens: ItemPedidoDTO[];


}