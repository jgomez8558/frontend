import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  ngOnInit() {
  }

}
