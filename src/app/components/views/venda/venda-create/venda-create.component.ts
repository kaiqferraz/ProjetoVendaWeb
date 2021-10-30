import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteVenda } from '../clienteVenda.model';
import { PedidoItemVenda } from '../pedidoItemVenda.modal';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  cliente: ClienteVenda = {
    nome: '',
}

  venda: Venda = {
    id: '',
    itens: [],
    cliente: []
  }
  itens: PedidoItemVenda[] = []

  
  constructor(private service: VendaService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id!).subscribe((resposta => {
      this.cliente.nome = resposta.nome
      console.log(resposta)
      
    }))
  }

 
  create(): void {
    this.service.create(this.venda)
      .subscribe((resposta) => {
        console.log(resposta)
        this.router.navigate([''])
        this.service.mensagem('Venda realiza com sucesso')
      }, err => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message)
        }
      })
  }



  cancel(): void {
    this.router.navigate([''])
  }


  
}
