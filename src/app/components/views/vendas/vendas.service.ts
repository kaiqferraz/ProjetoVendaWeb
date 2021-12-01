import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient,private _snack: MatSnackBar) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pedidos`);
  }

  adicionar(venda: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pedidos`, venda);
  }

  listarClientes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/clientes`);
  }

  listarProdutos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/produtos`);
  }

  mensagem(srt: String): void {
    this._snack.open(`${srt}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  








}