import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  produto: Produto = {
    id: '',
    nomeProduto: '',
    precoProduto: '',
    quantidadeProduto: '',
    temperaturaProduto: '',
  }

  constructor(private service: ProdutoService, 
    private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit(): void {
      this.produto.id = this.route.snapshot.paramMap.get('id')!
      this.findById();
    }
  
    findById(): void {
      this.service.findById(this.produto.id!).subscribe((resposta => {
        this.produto.nomeProduto = resposta.nomeProduto
        this.produto.precoProduto = resposta.precoProduto
        this.produto.quantidadeProduto = resposta.quantidadeProduto
        this.produto.temperaturaProduto = resposta.temperaturaProduto
        
      }))
    }
  
    update(): void {
      this.service.update(this.produto)
        .subscribe((resposta) => {
          this.router.navigate(['produtos'])
          this.service.mensagem('produto atualizado com sucesso')
        }, err => {
          this.service.mensagem("Validar se todos os campos estão preenchidos corretamente.")
        })
    }
  
  
    cancel(): void {
      this.router.navigate(['produtos'])
    }
  
}
