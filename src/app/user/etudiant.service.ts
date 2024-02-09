import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(
    private authenticationService: LoginComponent,
    private router: Router
  ) { }

 


}
