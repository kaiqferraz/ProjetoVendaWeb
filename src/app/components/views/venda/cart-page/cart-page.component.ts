import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { CartService } from '../cart.service';
import { CartItem } from '../venda-modals/cartItem';
import { Pedido } from '../venda-modals/pedido';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  itens : CartItem[] = [] ;
  pedido! : Pedido;
  clientes: Cliente[] = []
  //codigoPedido! : string;


  constructor( public cartService : CartService, public produtoService : ProdutoService, public pedidoService : VendaService, public router : Router, public clienteService : ClienteService) { }

  ngOnInit(): void {
    let cart = this.cartService.getCart();
    this.itens = cart.itens;
    this.itens = this.cartService.getCart().itens;
    this.findAll();
  }

  findAll() {
    this.clienteService.findAll().subscribe(resposta => {
      console.log(resposta)
      this.clientes = resposta;
    })
  }

  checkout() {
    this.pedidoService.insert(this.pedido).subscribe(resposta => {
      this.cartService.criarOuLimparCarrinho();
      this.router.navigate(['vendas'])
    }, error => {
      if(error.status == 403) {
        this.router.navigate(['home'])
    }
    });
  }


  incrementarQtd(produto: Produto) {
    this.itens = this.cartService.incrementarQtd(produto).itens;
  }

  decrementarQtd(produto : Produto) {
    this.itens = this.cartService.decrementarQuantidade(produto).itens;
  }

  removerItem(produto : Produto) {
    this.itens = this.cartService.removeProduto(produto).itens;
  }

  continuarComprando() {
    this.router.navigate(['vendas'])
  }

  finalizarPedido() {
   
  }

}
