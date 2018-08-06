import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  ngOnInit() {
  }

}
