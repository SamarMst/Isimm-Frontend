import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-signup-professeur',
  templateUrl: './signup-professeur.component.html',
  styleUrl: './signup-professeur.component.css',
})
export class SignupProfesseurComponent implements OnInit {
  registerForm: FormGroup | undefined;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        cin_prof: ['', [Validators.required]],
        telephone_prof: ['', [Validators.required]],
        nom_prof: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        departement: ['', [Validators.required]],
        titre: ['', [Validators.required]],
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
    this.router.navigate(['/login-prof']);
  }

  register() {
    const nom_prof = this.registerForm.get('nom_prof')?.value;
    const telephone_prof = this.registerForm.get('telephone_prof')?.value;
    const cin_prof = this.registerForm.get('cin_prof')?.value;
    const departement = this.registerForm.get('departement')?.value;
    const titre = this.registerForm.get('titre')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    let bodyData = {
      nom_prof,
      telephone_prof,
      cin_prof,
      departement,
      titre,
      email,
      password,
    };

    this.http
      .post('http://localhost:8080/professeur/signup', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Employee Registered Successfully');

        this.registerForm?.reset(); // Reset the form after successful registration
        this.router.navigateByUrl('/page-principale-prof');
      });
  }

  submitForm() {
    this.register(); // Call the register function
  }
}
