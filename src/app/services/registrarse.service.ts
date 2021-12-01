import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Registro {

  username   : string;
  password   : string;
  Tipo_usuario  : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {
  API = 'https://registroappjs-app.herokuapp.com/registros'
  constructor(private client: HttpClient) { }

  agregarUsuario(username: string, password: string, Tipo_usuario: boolean){
    return this.client.post(this.API, {username, password, Tipo_usuario} )
  }
}
