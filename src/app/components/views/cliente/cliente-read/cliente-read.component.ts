import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = []


 displayedColumns: string[] = ['id', 'nome', 'sexo', 'email','estadoCivil', 'cpf', 'dataNascimento', 'endereco','acoes'];

 formGroupPesquisa!: FormGroup;

 constructor(private service: ClienteService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
  
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.clientes = resposta;
    })
  }

public pesquisarClientes(key: string): void{
  const results: Cliente [] = [];
  for(const cliente of this.clientes) {
    if(cliente.nome.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || cliente.cpf.toLowerCase().indexOf(key.toLowerCase()) !== -1){
      results.push(cliente);
    }
  }
  this.clientes = results;
  if(results.length === 0 || !key){
    this.findAll();
  }
}



 

  navegarParaClienteCreate(){
    this.router.navigate(["clientes/create"])
  }


}
