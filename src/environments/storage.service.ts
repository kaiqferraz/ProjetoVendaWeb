import { Injectable } from "@angular/core";
import { Cliente } from "src/app/components/views/cliente/cliente.model";
import { Cart } from "src/app/components/views/venda/venda-modals/cart";
import { LocalCLient } from "src/app/components/views/venda/venda-modals/localClient";
import { STORAGE_KEY } from "./storage_keys.config";


@Injectable()
export class StorageService{

    getLocalClient() : LocalCLient {
        let client = localStorage.getItem(STORAGE_KEY.client);
        if(client == null) {
            return null!;
        }else {
            return JSON.parse(client);
        }
    }

    setLocalClient(obj : LocalCLient) {
        if(obj == null) {
            localStorage.removeItem(STORAGE_KEY.client);
        } else {
            localStorage.setItem(STORAGE_KEY.client, JSON.stringify(obj));
        }
    }

  



   
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

