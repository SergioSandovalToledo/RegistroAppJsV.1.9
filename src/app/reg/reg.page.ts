import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Registro, RegistrarseService } from '../services/registrarse.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  registrar: Registro = {
    username:'',
    password:'',
    Tipo_usuario: false
  }
  constructor(private registrarse: RegistrarseService,private activatedRoute : ActivatedRoute, private toastControler : ToastController) { }


  ngOnInit() {
  }
  //Mensaje
  async crearToast(mensaje: string, duracion: number){
    const t = await this.toastControler.create({
      message : mensaje,
      duration: duracion
    });
    t.present();
  }

  //Guardar Alumno
  guardarRegistro(usernmae,password,Tipo_usuario){
    this.registrarse.agregarUsuario(this.registrar.username, this.registrar.password, this.registrar.Tipo_usuario).subscribe(
      (res) => {
        //console.log(res),
        this.crearToast("Usuario guardado",2000);
      },
      (err) => console.log(err)
    );
  }
}
