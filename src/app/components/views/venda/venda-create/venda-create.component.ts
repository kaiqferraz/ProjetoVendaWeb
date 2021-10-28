import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  venda = {cliente: '', produto: '', quantidade: ''}

  itens: Venda[] = []


  
  constructor(private service: VendaService, private router: Router) {}
  
  ngOnInit(): void {
  }


  inserir(): void {
   console.log("cliente: " + this.venda.cliente + " produto: " + this.venda.produto + " quantidade: " + this.venda.quantidade)
  }
  
  cancel(): void {
    this.router.navigate([''])
  }


  
}
