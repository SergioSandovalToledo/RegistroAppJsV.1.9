import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authservice {

  API = 'https://registroappjs-app.herokuapp.com/registros'

  constructor(private client: HttpClient) { }
  getAll(){
    return this.client.get(this.API);
  }


}