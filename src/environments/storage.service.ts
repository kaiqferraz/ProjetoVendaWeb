import { Injectable } from "@angular/core";
import { Cart } from "src/app/components/views/venda/cart.model";
import { STORAGE_KEY } from "./storage_keys.config";


@Injectable()
export class StorageService{


   
    getCart() : Cart {
        let str = localStorage.getItem(STORAGE_KEY.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
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