import { Produto } from "../../produto/produto.model";

export interface CarrinhoItem {
  quantidade: number,
  produto: Produto
}