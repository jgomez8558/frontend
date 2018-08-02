import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  ngOnInit() {
  }

}
