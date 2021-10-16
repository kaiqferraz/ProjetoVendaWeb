import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.cliente)
      .subscribe((resposta) => {
        this.router.navigate(['clientes'])
        this.service.mensagem('cliente atualizado com sucesso')
      }, err => {
        this.service.mensagem("Validar se todos os campos estão preenchidos corretamente.")
      })
  }


  cancel(): void {
    this.router.navigate(['clientes'])
  }



}
