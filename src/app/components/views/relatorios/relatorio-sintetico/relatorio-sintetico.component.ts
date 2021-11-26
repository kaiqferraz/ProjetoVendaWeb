import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatorioSinteticoService } from './relatorio-sintetico.service';
import { RelatorioSintetico } from './relatorioSitentico.model';

@Component({
  selector: 'app-relatorio-sintetico',
  templateUrl: './relatorio-sintetico.component.html',
  styleUrls: ['./relatorio-sintetico.component.css']
})
export class RelatorioSinteticoComponent implements OnInit {

  relatorioSintetico: RelatorioSintetico[] = []
  dataVenda: any;

  displayedColumns: string[] = ['id', 'cliente', 'dataVenda', 'valorTotal', 'acoes'];

  constructor(private service: RelatorioSinteticoService, private router: Router) {

 
   }
 
   ngOnInit(): void {
    this.findAll();
   }
 
   findAll() {
     this.service.findAll().subscribe(resposta => {
       console.log(resposta)
       this.relatorioSintetico = resposta;
     })
   }

 

 

  
   
 
  

  }
