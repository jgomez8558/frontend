import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }
  
  ngOnInit() {
  }

}
