import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PedidoItem } from './pedidoItem.model';

import { RelatorioAnalitico } from './relatorioAnalitico.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioAnaliticoService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  itens: PedidoItem[] = []

  subTotal: Subject<number> = new Subject<number>();
  quantidade: Subject<number> = new Subject<number>();



  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<RelatorioAnalitico> {
    const url = `${this.baseUrl}/pedidos/${id}`
    return this.http.get<RelatorioAnalitico>(url)
  }

 
 


}
