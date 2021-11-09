import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {

  constructor(public produtoService : ProdutoService, public cartService : CartService, public router: Router,private route: ActivatedRoute) { }

  item: Produto = {
    id: '',
    nomeProduto: '',
    precoProduto: '',
    quantidadeProduto: '',
    temperaturaProduto: '',
  }
  
  ngOnInit(): void {
    this.item.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.produtoService.findById(this.item.id!).subscribe((resposta => {
      this.item.nomeProduto = resposta.nomeProduto
      this.item.precoProduto = resposta.precoProduto
      this.item.temperaturaProduto = resposta.temperaturaProduto 
      this.item.quantidadeProduto = resposta.quantidadeProduto         
    }))
  }

  addToCart(produto : Produto) {
    this.cartService.addProduto(produto);
    this.router.navigate(['cartPage']);
  }


}
