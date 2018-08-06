import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
  
})
export class ClassComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }
  
  ngOnInit() {
  }
