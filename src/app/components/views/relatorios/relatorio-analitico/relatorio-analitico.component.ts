import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoItem } from './carrinhoItem.model';
import { RelatorioAnaliticoService } from './relatorio-analitico.service';



@Component({
  selector: 'app-relatorio-analitico',
  templateUrl: './relatorio-analitico.component.html',
  styleUrls: ['./relatorio-analitico.component.css']
})
export class RelatorioAnaliticoComponent implements OnInit {

  relatorio = {id:'', cliente: '', produto: '', quantidade: ''}

  itens: CarrinhoItem[] = []

  constructor(private service: RelatorioAnaliticoService, 
    private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.relatorio.id = this.route.snapshot.paramMap.get('id')!
      this.findById();
    }

    findById(): void {
      this.service.findById(this.relatorio.id!).subscribe((resposta => {
     
       console.log(resposta)
      }))
    }
   


  }
