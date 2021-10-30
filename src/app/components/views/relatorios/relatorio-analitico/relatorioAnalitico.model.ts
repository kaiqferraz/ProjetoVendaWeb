import { PedidoItem } from "./pedidoItem.model";

export interface RelatorioAnalitico{
  id?: String;
  itens: PedidoItem[];
  }