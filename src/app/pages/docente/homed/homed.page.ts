import { Component, OnInit } from '@angular/core';
import { authservice } from 'src/app/services/auth.service';
@Component({
  selector: 'app-homed',
  templateUrl: './homed.page.html',
  styleUrls: ['./homed.page.scss'],
})
export class HomedPage implements OnInit {

  constructor(
    private auth: authservice,
  ) { }
  
  ngOnInit() {
  }

}
