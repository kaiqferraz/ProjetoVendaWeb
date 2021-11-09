import { Injectable } from "@angular/core";
import { Cart } from "src/app/components/views/venda/venda-modals/cart";
import { LocalCLient } from "src/app/components/views/venda/venda-modals/localClient";
import { STORAGE_KEY } from "./storage_keys.config";


@Injectable()
export class StorageService{

    getLocalClient() : LocalCLient {
        let client : LocalCLient = {nome:'',token:''};
        let str;
        if(str = localStorage.getItem(STORAGE_KEY.client)) {
            return JSON.parse(str)
        }else {
            return client;
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

