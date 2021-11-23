import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RelatorioSintetico } from './relatorioSitentico.model';



@Injectable({
  providedIn: 'root'
})
export class RelatorioSinteticoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<RelatorioSintetico[]> {
    const url = `${this.baseUrl}/pedidos`
    return this.http.get<RelatorioSintetico[]>(url)
  }

  mensagem(srt: String): void {
    this._snack.open(`${srt}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}
