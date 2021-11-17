import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }
 
 

  findAll(): Observable<Produto[]> {
   const url = `${this.baseUrl}/produtos`
   return this.http.get<Produto[]>(url)
 }

 findById(id: String): Observable<Produto> {
  const url = `${this.baseUrl}/produtos/${id}`
  return this.http.get<Produto>(url)
}


 create(produto: Produto): Observable<Produto> {
  const url = `${this.baseUrl}/produtos`
  return this.http.post<Produto>(url, produto);
}


update(produto: Produto): Observable<void> {
  const url = `${this.baseUrl}/produtos/${produto.id}`
  return this.http.put<void>(url, produto);
}

delete(id: String): Observable<void> {
  const url = `${this.baseUrl}/produtos/${id}`
  return this.http.delete<void>(url)
}

mensagem(srt: String): void {
  this._snack.open(`${srt}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
  })
}


}
