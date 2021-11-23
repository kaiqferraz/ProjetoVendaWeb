import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';

import { PedidoItem } from './pedidoItem.model';

import { RelatorioAnaliticoService } from './relatorio-analitico.service';
import { RelatorioAnalitico } from './relatorioAnalitico.model';


@Component({
  selector: 'app-relatorio-analitico',
  templateUrl: './relatorio-analitico.component.html',
  styleUrls: ['./relatorio-analitico.component.css']
})
export class RelatorioAnaliticoComponent implements OnInit {

 
  
  itens: PedidoItem[] = []

  relatorio: RelatorioAnalitico = {
    id: '',
    itens: [],

  }

  displayedColumns: string[] = ['id','produto', 'quantidade', 'preco', 'subTotal'];

  constructor(private service: RelatorioAnaliticoService, 
    private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.relatorio.id = this.route.snapshot.paramMap.get('id')!
      this.findById();
    }

    findById(): void {
      this.service.findById(this.relatorio.id!).subscribe((resposta => {
      this.relatorio.itens = resposta.itens
     
      console.log(resposta.itens)
     
      }))
    }

    
    cancel(): void {
      this.router.navigate(['relatorioSintetico'])
    }
    
    







  }

