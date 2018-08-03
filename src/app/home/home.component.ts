import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  public ngOnInit() {
    $(function(){
      $(window).scroll(function() {
         if($(window).scrollTop() >= 100) {
           $('nav').addClass('scrolled');
         }
        else {
          $('nav').removeClass('scrolled');
        }
      });
    });
    
  }



  
}
