import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/environments/storage.service';
import { Produto } from '../produto/produto.model';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
      public storage: StorageService,
    private http: HttpClient
    ){}

    criarOuLimparCarrinho(): Cart {
        let cart: Cart = {itens: []};
        this.storage.setCart(cart);
        return cart;
    }

    getCart(): Cart{
        let cart: Cart = this.storage.getCart(); //pega o objeto carrinho se existir
        if(cart === null){ 
            cart = this.criarOuLimparCarrinho(); //cria um carrinho se nao existir
        }
        return cart;
    }

    addProduto(meuProduto: Produto): Cart {
        console.log(meuProduto)
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position == -1){ // -1: nao foi encontrado o produto
            cart.itens.push({quantidade: 1, produto: meuProduto});
        }
        this.storage.setCart(cart);
        return cart;
    }

    removeProduto(meuProduto: Produto): Cart {
      console.log(meuProduto)
      let cart = this.getCart(); //pega o carrinho existente
      let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
      if(position != -1){ // diferente de -1: foi encontrado o produto
          cart.itens.splice(position,1);
      }
      this.storage.setCart(cart);
      console.log(cart)
      return cart;
  }

  incrementarQtd(meuProduto: Produto): Cart {
    console.log(meuProduto)
    let cart = this.getCart(); //pega o carrinho existente
    let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
    if(position != -1){ // diferente de -1: foi encontrado o produto
        cart.itens[position].quantidade++;
    }
    this.storage.setCart(cart);
    return cart;
}

 decrementarQuantidade(meuProduto: Produto): Cart {
    console.log(meuProduto)
    let cart = this.getCart(); //pega o carrinho existente
    let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
    if(position != -1){ // diferente de -1: foi encontrado o produto
        cart.itens[position].quantidade--;
        if(cart.itens[position].quantidade < 1){ //caso a qtd selecionada seja < 1
            cart = this.removeProduto(meuProduto); //remove o produto
        }
    }
    this.storage.setCart(cart);
    return cart;
}



}