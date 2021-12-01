import { AlumnosService } from './../../../services/alumnos.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  alumnos: any = []
  constructor(private AlumnosService: AlumnosService, private alertController: AlertController,private router: Router) { }
  //FUNCION QUE CARGA LA LISTA
  cargarLista() {
    this.AlumnosService.getAll().subscribe(
      (res) => {
        console.log(res)
        this.alumnos = res;
      },
      (err) => console.log(err)
    );
  }
  //REFRESH UNICO
  ngOnInit() {
    this.cargarLista()
  }
  //REFREZCAR LA PAGINA
  ionViewWillEnter() {
    this.cargarLista()
  }
  //ELIMINAR ALUMNO
  async eliminarAlumno(id) {
    const alerta = await this.alertController.create({
      //MENSAJE
      header: 'Confirmación',
      message: '<strong>¿Quieres Eliminar al alumno?</strong>',
      //BOTONES
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, 
        {
          text: 'Eliminar',
          handler: () => {
            this.AlumnosService.deleteAlumno(id).subscribe(
              (res) => {
                console.log(res)
                //ACTUALIZA LA PAGINA
                window.location.href = window.location.href;
              },
              (err) => console.log(err)
            );
          }
        }
      ]
    });

    await alerta.present();
    //NO PASAR
  }
}