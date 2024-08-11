import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrl: './login-prof.component.css',
})
export class LoginProfComponent implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  navigateToSignUp() {
    this.router.navigate(['/signup-prof']);
  }
  submitForm() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    let bodyData = {
      email,
      password,
    };

    this.http
      .post('http://localhost:8080/professeur/login', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);

        if (resultData.message == 'Email not exits') {
          alert('Email not exits');
        } else if (resultData.message == 'Login Success') {
          this.router.navigateByUrl('/page-principale-prof');
        } else {
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
