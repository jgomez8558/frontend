import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
  
})
export class ClassComponent implements OnInit {

  title = "This Event is Happening";
  info = "An Abyss seems to be the result of rampant, uncontrolled humanity expanding and swallowing up people and places. The first Abyss in recorded history was generated when Manus' humanity went wild from his madness, corrupting life and leaving behind an infinite chasm of darkness with it."
  events = ["Comic Con", "Saxxit Gun Show", "Car Show", "Anime Con",];

  
  

  constructor(public libra: LibraService) {

    this.libra = libra;

  }
  
  ngOnInit() {
  }
}
