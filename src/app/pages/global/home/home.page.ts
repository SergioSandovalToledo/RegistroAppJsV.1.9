import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { authservice } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Usuarios: any = [];
  constructor(public navCtrl: NavController,
    private usuarios: authservice, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertcontroller: AlertController
    ) { }
  cargarUsuarios(){
    this.usuarios.getAll().subscribe(
      (res)=>{
        this.Usuarios=res;
      console.log(this.Usuarios);
    }, (err)=>{
      console.log(err)
    }
    );
  }

  ngOnInit() {
    this.cargarUsuarios()
  }


  async validar(user, password){
    for (var aux of this.Usuarios) {
      if (aux.username==user.value) {
        if (aux.password==password.value) {
          if(aux.Tipo_usuario == true){
            this.router.navigate(['/homea'])
          }else{
            this.router.navigate(['/homed'])
        }const alerta = await this.alertcontroller.create({
          header: 'Bienvenido',
          message: aux.username + '!',   /* 'Bienvenido : '+ aux.username, */
          buttons: [ {
            text: 'OK',
          }]
        });
          await alerta.present();
      }else{
        const alerta = await this.alertcontroller.create({
          header: 'Alerta!',
          message: 'Usuario o Contraseña incorrectos',
          buttons: [ {
            text: 'OK',
          }]
        });
          await alerta.present();
        }
      }
     }
    }
  

}
