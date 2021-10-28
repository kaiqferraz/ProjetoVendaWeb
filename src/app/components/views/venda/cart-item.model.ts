import { Produto } from "../produto/produto.model";

export interface CartItem {
  quantidade: number,
  produto: Produto
}
