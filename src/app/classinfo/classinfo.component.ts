import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classinfo',
  templateUrl: './classinfo.component.html',
  styleUrls: ['./classinfo.component.css']
})
export class ClassinfoComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;

  }

  ngOnInit() {
  }

}
