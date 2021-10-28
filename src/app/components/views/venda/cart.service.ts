import { Injectable } from "@angular/core";
import { StorageService } from "src/environments/storage.service";
import { Produto } from "../produto/produto.model";
import { Cart } from "./cart.model";

@Injectable()
export class CartService {


    constructor(public storage : StorageService) {}

    createOrClearCart() : Cart {
        let cart : Cart = {itens : []};
        this.storage.setCart(cart);
        return cart;
    }

    
    getCart() : Cart {
        //Retorna o carrinho de compras já existente no storage ou um novo carrinho
        let cart : Cart = this.storage.getCart();
        if(cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }



    addProduto(produtoDTO: Produto) : Cart {
      let cart = this.getCart();
      let position = cart.itens.findIndex(x => x.produto.id == produtoDTO.id);
      if(position == -1) {
          cart.itens.push({quantidade : 1, produto : produtoDTO});
        }  
        this.storage.setCart(cart);
        return cart;
      }







  }
  


    
