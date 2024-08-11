import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'], // Corrected styleUrls property
})
export class LoginAdminComponent implements OnInit {
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
    this.router.navigate(['/signup']);
  }
  submitForm() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    let bodyData = {
      email,
      password,
    };

    this.http
      .post('http://localhost:8080/admin/login', bodyData)
      .subscribe((resultData: any) => {
        if (resultData.status) {
          // Login successful
          // Store the userData object from the status property in local storage
          localStorage.setItem('userData', JSON.stringify(resultData.status));
          this.router.navigateByUrl('/page-principale-administration');
        } else {
          // Login failed
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
