import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    sexo: '',
    email: '',
    estadoCivil: '',
    cpf: '',
    dataNascimento: '',
    endereco: '',

}

constructor(private service: ClienteService, 
  private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id!).subscribe((resposta => {
      this.cliente.nome = resposta.nome
      this.cliente.sexo = resposta.sexo
      this.cliente.email = resposta.email
      this.cliente.estadoCivil = resposta.estadoCivil
      this.cliente.cpf = resposta.cpf
      this.cliente.dataNascimento = resposta.dataNascimento
      this.cliente.endereco = resposta.endereco
      
    }))
  }

  delete(): void {
    this.service.delete(this.cliente.id!).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente deletado com sucesso!')

    }, err => {
      if(err.status == 500) {
        this.service.mensagem("cliente com venda registrada!!")
    }
      
    })
  }





  cancel(): void {
    this.router.navigate(['clientes'])
  }





}
