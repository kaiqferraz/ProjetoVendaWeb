import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.model';
import { Produto } from '../produto/produto.model';
import { Pedido } from './venda-modals/pedido';


@Injectable({
  providedIn: 'root'
})


export class VendaService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }
 
  insert(obj : Pedido) {
    return this.http.post(`${this.baseUrl}/pedidos`, obj, {
        observe : 'response',
        responseType : 'text'
    });
}


  
  findAllClientes(): Observable<Cliente[]> {
    const url = `${this.baseUrl}/clientes`
    return this.http.get<Cliente[]>(url)
  }

  findAllProdutos(): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos`
    return this.http.get<Produto[]>(url)
  }

  

   




  mensagem(srt: String): void {
    this._snack.open(`${srt}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }





 }