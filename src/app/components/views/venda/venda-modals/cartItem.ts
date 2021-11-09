import { Produto } from "../../produto/produto.model";


export interface CartItem {
  
  produto:  Produto;
  quantidade: number;

}