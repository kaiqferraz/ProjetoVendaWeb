import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';

import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { CartService } from '../cart.service';
import { CartItem } from '../cartItem';
import { Pedido } from '../pedido';
import { VendaService } from '../venda.service';



@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {



  clientes: Cliente[] = [];  // PEGA O CLIENTE
  produtos: Produto[] = [];  // PEGA O PRODUTO
  item!: Produto;             // ADICIONA AO CARRINHO/LISTA
  cartItems : CartItem[] = [];
  itens: CartItem[] = [];    // SELECIONA A QUANTIDADE 
  pedido!: Pedido;           // FINALIZA A VENDA

  
  
  

  constructor( 
    public cartService : CartService, 
    public produtoService : ProdutoService,
    public vendaService: VendaService,
    public clienteService: ClienteService,
    public http: HttpClient,
    public formBuilder : FormBuilder,
    public router: Router

    ) {
  
 
  }

  ngOnInit(): void {
  this.findAllClientes();
  this.findAllProdutos();
  this.quantidade();
  this.cartItems = this.cartService.getCart().itens;
  
  }

 //---------------CLIENTES-----------------//

 findAllClientes() {
  this.clienteService.findAll().subscribe(resposta => {
    this.clientes = resposta
    console.log(resposta)
  })
  
}

  //---------------PRODUTO E QUANTIDADE-----------------//

  findAllProdutos() {
    this.vendaService.findAllProdutos().subscribe(resposta => { 
      this.produtos = resposta  
      console.log(resposta);
    })
  }

  quantidade(){
    let cart = this.cartService.getCart();
    this.itens = cart.itens;
    console.log(this.itens)
   }

   incrementarQtd(produto: Produto) {
    this.itens = this.cartService.incrementarQtd(produto).itens;
  }

  decrementarQtd(produto : Produto) {
    this.itens = this.cartService.decrementarQuantidade(produto).itens;
  }


//---------------CARRINHO----------------------//
  addToCart(produto : Produto) {
  this.cartService.addProduto(produto);
  
}


 //--------------CONFIRMA VENDA-----------------//

 checkout() {
  this.vendaService.insert(this.pedido).subscribe(resposta => {
    this.cartService.criarOuLimparCarrinho();
    this.router.navigate(['relatorioSintetico'])
    this.produtoService.mensagem('Obrigado, venda realizada com sucesso')
  }, error => {
    if(error.status == 403) {
      this.router.navigate([''])
  }
  });
}

 


 //-----------------TOTAL------------------------//

 

}