import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
@Component({
  selector: 'app-sigup-etudiant',
  templateUrl: './sigup-etudiant.component.html',
  styleUrl: './sigup-etudiant.component.css',
})
export class SigupEtudiantComponent implements OnInit {
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
        nom_etudiant: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        cin_etud: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password_etudiant: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMathValidator }
    );
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password_etudiant = formGroup.get('password_etudiant')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password_etudiant != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  navigateToSignIn() {
    this.router.navigate(['/login']);
  }

  register() {
    const nom_etudiant = this.registerForm.get('nom_etudiant')?.value;
    const telephone = this.registerForm.get('telephone')?.value;
    const cin_etud = this.registerForm.get('cin_etud')?.value;
    const email = this.registerForm.get('email')?.value;
    const password_etudiant = this.registerForm.get('password_etudiant')?.value;
    let bodyData = {
      nom_etudiant,
      telephone,
      cin_etud,
      email,
      password_etudiant,
    };

    this.http
      .post('http://localhost:8080/etudiant/signup', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        localStorage.setItem('userData', JSON.stringify(resultData));
        alert('Employee Registered Successfully');

        this.registerForm?.reset(); // Reset the form after successful registration
        this.router.navigateByUrl('/page-principale-etud');
      });
  }

  submitForm() {
    this.register(); // Call the register function
  }
}
