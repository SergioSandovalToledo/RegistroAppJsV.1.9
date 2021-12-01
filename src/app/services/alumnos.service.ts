import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Alumno {
  id?       : string;
  pnombre   : string;
  snombre   : string;
  appaterno : string;
  apmaterno : string;
  fecha_nac : Date;
  numero_seg: number;
  sub_info  : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  API = "https://registroappjs-app.herokuapp.com/alumnos"
  constructor(private cliente: HttpClient) {}
    //READ ALUMNOS
    getAll(){
      return this.cliente.get(this.API);
    }
    //CREATE ALUMNO                       FALTA SUBIR IMAGEN AL SERVIDOR
    createAlumno(pnombre: string,snombre: string,appaterno: string, apmaterno: string,fecha_nac: Date,numero_Seg: number,sub_info: boolean){
      return this.cliente.post(this.API,{ pnombre,snombre,appaterno,apmaterno,fecha_nac,numero_Seg,sub_info});
    }
    //DELETE ALUMNO
    deleteAlumno(id: string){
      return this.cliente.delete(`${this.API}/${id}`)
    }
    //UPDATE ALUMNO
    //1. Buscar al alumno  
    getAlumno(id: string){
      return this.cliente.get<Alumno>(`${this.API}/${id}`)
    }
    //2. Actualizar
    update(id: string, alumno: Alumno){
      return this.cliente.put(`${this.API}/${id}`, alumno)
    }
}
