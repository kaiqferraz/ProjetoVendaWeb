import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/environments/storage.service';
import { CartService } from './cart.service';
import { Credenciais } from './venda-modals/credenciais';
import { LocalCLient } from './venda-modals/localClient';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper : JwtHelperService = new JwtHelperService();

  constructor(public http : HttpClient, public storage : StorageService, public cartService : CartService) { }

  baseUrl: String = environment.baseUrl;

  authenticate(creds : Credenciais) {
    return this.http.post(`${this.baseUrl}/login`, creds, {
         
         observe : 'response',
         responseType : 'text'

     });
 }

 sucessfulLogin(authorizationValue : string) {
  
  let tok = authorizationValue.substring(7);
  let cliente : LocalCLient = { 
      token: tok, 
      email :  this.jwtHelper.decodeToken(tok).sub
  };
  this.storage.setLocalClient(cliente);
  this.cartService.criarOuLimparCarrinho();
}

refreshToken() {
  return this.http.post(`${this.baseUrl}/auth/refresh_token`, {}, {
      observe: 'response',
      responseType: 'text'

  });
}

logout() {
  this.storage.setLocalClient(null!);
}






}
