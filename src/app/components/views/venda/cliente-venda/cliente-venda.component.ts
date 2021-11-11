import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/environments/storage.service';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-cliente-venda',
  templateUrl: './cliente-venda.component.html',
  styleUrls: ['./cliente-venda.component.css']
})
export class ClienteVendaComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor(
    public pedidoService : VendaService, 
    public router : Router, 
    public clienteService : ClienteService,
    public storage : StorageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAllClientes();

  }

 findAllClientes() {
  
    this.clienteService.findAll().subscribe(resposta => {
      console.log(resposta)
      this.clientes = resposta;
    })
  }

  avancar(){
    this.router.navigate(['vendas']);
  }





}
