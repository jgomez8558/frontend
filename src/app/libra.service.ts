import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraService {

  constructor(public libra: LibraService, public router: Router, public http: HttpClient) {

    this.libra = libra;
    this.router = router;

   }
}
