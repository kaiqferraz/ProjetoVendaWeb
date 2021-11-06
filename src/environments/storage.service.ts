import { Injectable } from "@angular/core";
import { Produto } from "src/app/components/views/produto/produto.model";
import { ProdutoService } from "src/app/components/views/produto/produto.service";
import { Cart } from "src/app/components/views/venda/cart";
import { CartItem } from "src/app/components/views/venda/cartItem";
import { ItemPedidoDTO } from "src/app/components/views/venda/item-pedido";
import { STORAGE_KEY } from "./storage_keys.config";


@Injectable()
export class StorageService{



   getCart() : Cart {
    let cart: Cart = {itens: []};
    let str;
    if( str = localStorage.getItem(STORAGE_KEY.cart)){
        return JSON.parse(str)
    } else{
       return cart;
    }
}



    setCart(obj : Cart) {
        if(obj != null) {
            localStorage.setItem(STORAGE_KEY.cart, JSON.stringify(obj));
        } else {
            localStorage.removeItem(STORAGE_KEY.cart);
        }
    }


    
}

