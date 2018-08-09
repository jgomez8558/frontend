import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})

export class LibraService {
 
  // Varibles
  firstName: String;
  lastName: String;
  address: String;
  email: String;
  phone: Number;
  role: Number;
  username: String;
  password: String;

  users = [];

  routeRegistration(){

    const user = {

      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      email: this.email,
      phone: this.phone,
      role: this.role,
      username: this.username,
      password: this.password

    }

    

    /*
    this.http.post<any>(`http://localhost:3000/users/signup`, {

      "firstName": (<HTMLInputElement>document.getElementById('firstName')).value,
      "lastName": (<HTMLInputElement>document.getElementById('lastName')).value,
      "address": (<HTMLInputElement>document.getElementById('address')).value,
      "email": (<HTMLInputElement>document.getElementById('email')).value,
      "phone": (<HTMLInputElement>document.getElementById('phone')).value,
      "role": (<HTMLInputElement>document.getElementById('role')).value,
      "username": (<HTMLInputElement>document.getElementById('username')).value,
      "password": (<HTMLInputElement>document.getElementById('password')).value,
    })

    // gets back informtion from login
    .toPromise()
    .then( result => {
      console.log(result);

      if (result == true) {

        // Route to Registration 
        this.router.navigate(['/home']);
  
      }
      
    })
    .catch(err => {
      console.log(err);
      
    })
    */
  }

  // Checking password
  confirmPassword(password){
    
    if(password == this.password) {

      this.password = password;
    
    } else {

      alert("Password does not match, retype it again.");

    }
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
