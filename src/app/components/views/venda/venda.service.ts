import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.model';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})


export class VendaService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }
 

  findById(id: String): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/${id}`
    return this.http.get<Cliente>(url)
  }


    create(venda: Venda): Observable<Venda> {
    const url = `${this.baseUrl}/pedidos`
    console.info(venda)
    return this.http.post<Venda>(url, venda);
  }




  mensagem(srt: String): void {
    this._snack.open(`${srt}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }





 }