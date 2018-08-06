import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibraService {

  routeRegistration(){

    // Route to Registration
    this.router.navigate(['/registration']);

  }

  routeHome(){

    // Route to Home
    this.router.navigate(['/home']);

  }

  routeClass(){

    // Route to Class
    this.router.navigate(['/class']);

  }

  routeProfile(){

    // Route to Profile
    this.router.navigate(['/profile']);

  }

  constructor(public libra: LibraService, public router: Router, public http: HttpClient) {

    this.libra = libra;
    this.router = router;

   }
}
