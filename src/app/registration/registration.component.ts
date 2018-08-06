import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  ngOnInit() {
  }

}
