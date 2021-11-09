import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClienteService } from '../../cliente/cliente.service';
import { Produto } from '../../produto/produto.model';

import { ProdutoService } from '../../produto/produto.service';
import { CartService } from '../cart.service';


import { VendaService } from '../venda.service';



@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  itens : Produto[] = [];

  displayedColumns: string[] = ['nomeProduto', 'precoProduto','acoes'];
  
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
    this.produtoService.findAll().subscribe(resposta => {
      this.itens = resposta
      console.log(resposta)
    }, error =>{});
  }

  
   
 

 

}