import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas-cadastro',
  templateUrl: './vendas-cadastro.component.html',
  styleUrls: ['./vendas-cadastro.component.css']
})
export class VendasCadastroComponent implements OnInit {

 
  venda: any = {itens: [], total: 0.0};
  item: any ={};
  clientes: Array<any> = [];
  produtos: Array<any> = [];
  @Output() vendaSalva = new EventEmitter();

  constructor(private vendaService: VendasService,  private router: Router) { }

  ngOnInit() {
    this.vendaService.listarClientes()
      .subscribe(response => this.clientes = response);

    this.vendaService.listarProdutos()
      .subscribe(response => this.produtos = response);

  }

  incluirItem() {
    this.item.valorTotal = (this.item.produto.precoProduto * this.item.quantidade);

    this.venda.itens.push(this.item);

    this.item = {};
    console.log(this.venda.itens)
  
  }

  adicionar() {
    this.vendaService.adicionar(this.venda).subscribe(response => {
      this.venda = {};
      this.router.navigate(['relatorioSintetico'])
      this.vendaService.mensagem('Venda realizada com sucesso')
    });
  }

  cancel(): void {
    this.router.navigate([''])
  }

  
calcularTotal(){


}

}

  
  
