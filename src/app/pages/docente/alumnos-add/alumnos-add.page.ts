import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos-add',
  templateUrl: './alumnos-add.page.html',
  styleUrls: ['./alumnos-add.page.scss'],
})
export class AlumnosAddPage implements OnInit {
  editar = false

  alumno: Alumno = {
    pnombre:'',
    snombre:'',
    appaterno:'',
    apmaterno:'',
    fecha_nac: new Date(),
    numero_seg: 0,
    sub_info: false
  }
  constructor(private alumnosService: AlumnosService,private activatedRoute : ActivatedRoute, private toastControler : ToastController) { }

  ngOnInit() {
    //UPDATE ALUMNO
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')){
        this.editar = true
        this.alumnosService.getAlumno(paramMap.get('id')).subscribe(
          (res) => {
            //console.log(res)
            this.alumno = res
          }
        )
      }
    })
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
  guardarAlumno(pnombre,snombre,appaterno,apmaterno,fecha_nac,numero_seg,sub_info){
    this.alumnosService.createAlumno(this.alumno.pnombre, this.alumno.snombre, this.alumno.appaterno, this.alumno.apmaterno, this.alumno.fecha_nac, this.alumno.numero_seg, this.alumno.sub_info).subscribe(
      (res) => {
        //console.log(res),
        this.crearToast("Alumno guardado",2000);
      },
      (err) => console.log(err)
    );
  }
  //Actualizar Alumno
  actualizar(){
    this.alumnosService.update(this.alumno.id, {
      pnombre   : this.alumno.pnombre,
      snombre   : this.alumno.snombre,
      appaterno : this.alumno.appaterno,
      apmaterno : this.alumno.apmaterno,
      fecha_nac : this.alumno.fecha_nac,
      numero_seg: this.alumno.numero_seg,
      sub_info  : this.alumno.sub_info
    }).subscribe(
      (res) => {
        //console.log(res)
      this.crearToast("Alumno actualizado",2000);
      }
    )
  }
}
