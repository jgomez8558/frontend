import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})

export class LibraService {
 users = [];

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

  test(){
    this.http.post<any>(`http://localhost:3000/users/signup`, {
      "firstName": (<HTMLInputElement>document.getElementById('firstName')).value,
      "lastName": (<HTMLInputElement>document.getElementById('lastName')).value,
      "username": (<HTMLInputElement>document.getElementById('username')).value
    })
    .toPromise()
    .then( result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
      
    })
    // this.http.get<any>(`Http://localhost:3000/test`).subscribe((response) => {
    //   console.log(response);
    // });
  }

  constructor(public libra: LibraService, public router: Router, public http: HttpClient) {

    this.libra = libra;
    this.router = router;

  }
}
