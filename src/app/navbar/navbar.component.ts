import { Component, OnInit } from '@angular/core';
import { LibraService } from '../libra.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public libra: LibraService) {

    this.libra = libra;
   
  }

  public ngOnInit() {
    // Sticky Header
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
