import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
@Component({
  selector: 'app-signup-administration',
  templateUrl: './signup-administration.component.html',
  styleUrl: './signup-administration.component.css',
})
export class SignupAdministrationComponent implements OnInit {
  registerForm: FormGroup | undefined;
  constructor(
    private router: Router,
    private service: JwtService,
    private fb: FormBuilder,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        nom_admin: ['', [Validators.required]],
        telephone_admin: ['', [Validators.required]],
        cin_admin: ['', [Validators.required]],
        email_admin: ['', [Validators.required, Validators.email]],
        titre_admin: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMathValidator }
    );
  }
  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  navigateToSignIn() {
    this.router.navigate(['/login-admin']);
  }

  register() {
    const nom_admin = this.registerForm.get('nom_admin')?.value;
    const telephone_admin = this.registerForm.get('telephone_admin')?.value;
    const cin_admin = this.registerForm.get('cin_admin')?.value;
    const email_admin = this.registerForm.get('email_admin')?.value;
    const titre_admin = this.registerForm.get('titre_admin')?.value;
    const password = this.registerForm.get('password')?.value;
    let bodyData = {
      nom_admin,
      telephone_admin,
      cin_admin,
      email_admin,
      titre_admin,
      password,
    };
    this.http
      .post('http://localhost:8080/admin/signup', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        localStorage.setItem('userData', JSON.stringify(resultData.status));
        alert('Administration Registered Successfully');

        this.registerForm?.reset(); // Reset the form after successful registration
        this.router.navigateByUrl('/page-principale-administration');
      });
  }

  submitForm() {
    this.register(); // Call the register function
  }
}
