import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibraService {

  routeRegistration(){

    // Return back to favorites
    // this.router.navigate(['Registration']);

  }

  routeHome(){

    // Return back to favorites
    this.router.navigate(['/home']);

  }

  routeClass(){

    // Return back to favorites
    this.router.navigate(['/class']);

  }

  routeProfile(){

    // Return back to favorites
    // this.router.navigate(['profile']);

  }

  constructor(public libra: LibraService, public router: Router, public http: HttpClient) {

    this.libra = libra;
    this.router = router;

   }
}
