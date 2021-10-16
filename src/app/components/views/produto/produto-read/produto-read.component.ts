import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[] = []

 
  displayedColumns: string[] = ['id', 'nomeProduto', 'precoProduto', 'quantidadeProduto', 'temperaturaProduto','acoes'];
 
  constructor(private service: ProdutoService, private router: Router) { }
 
   ngOnInit(): void {
     this.findAll();
   }
 
   findAll() {
     this.service.findAll().subscribe(resposta => {
       console.log(resposta)
       this.produtos = resposta;
     })
   }

   public pesquisarProdutos(key: string): void{
    const results: Produto [] = [];
    for(const produto of this.produtos) {
      if(produto.nomeProduto.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(produto);
      }
    }
    this.produtos = results;
    if(results.length === 0 || !key){
      this.findAll();
    }
  }
 
   navegarParaProdutoCreate(){
     this.router.navigate(["produtos/create"])
   }

  }
