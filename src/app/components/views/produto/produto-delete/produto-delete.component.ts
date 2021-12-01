import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

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

    delete(): void {
      this.service.delete(this.produto.id!).subscribe((resposta) => {
        this.router.navigate(['produtos'])
        this.service.mensagem('produto deletado com sucesso!')
  
      }, err => {
        if(err.status == 500) {
          this.service.mensagem("produto com venda registrada!!")
      }
      })
    }
  
    cancel(): void {
      this.router.navigate(['produtos'])
    }
  

}
