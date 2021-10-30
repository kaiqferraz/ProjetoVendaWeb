import { Cliente } from "../cliente/cliente.model";
import { PedidoItemVenda } from "./pedidoItemVenda.modal";

export interface Venda{
  id?: String;
  itens: PedidoItemVenda[];
  cliente: Cliente[]

  }