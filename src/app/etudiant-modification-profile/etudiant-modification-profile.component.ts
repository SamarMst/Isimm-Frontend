import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-modification-profile',
  templateUrl: './etudiant-modification-profile.component.html',
  styleUrls: ['./etudiant-modification-profile.component.css'],
})
export class EtudiantModificationProfileComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null; // Variable to hold the image URL
  updateForm: FormGroup | undefined;
  userData: any;
  photoData: string; // Contains the image file name
  cin: string;
  nom_etudiant: string;
  email: string;
  bio: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.getImageUrl(this.selectedFile); // Generate image URL
  }

  getImageUrl(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group(
      {
        telephone: [''],
        email: [''],
        adresse: [''],
        specialite: [''],
        ville: [''],
        codepostal: [''],
        date_naissance: [''],
        lieu_naissance: [''],
        niveau_etude: [''],
        sexe: [''],
        cnss: [''],
        session_bac: [''],
        annee_bac: [''],
        moyenne_bac: [''],
        section_bac: [''],
        td: [''],
        nationalite: [''],
        password: [''],
        confirmPassword: [''],
        mention: [''],
        github: [''],
        linkedin: [''],
      },
      { validator: this.passwordMathValidator }
    );
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      // Parse the JSON string to convert it back to an object
      this.userData = JSON.parse(userDataString);
      this.photoData = this.userData.photoData;
      this.cin = this.userData.cin_etud;
      this.nom_etudiant = this.userData.nom_etudiant;
      this.email = this.userData.email;
      this.bio = this.userData.bio;
      //console.log(this.userData);
    }
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

  onDateChange(event: any) {
    const selectedDate = new Date(event.target.value);
    const selectedYear = selectedDate.getFullYear();

    // Define the allowed range of years
    const minYear = 2000;
    const maxYear = 2023;

    if (selectedYear >= minYear && selectedYear <= maxYear) {
    } else {
      alert('Please select a year between 2000 and 2023');
      this.updateForm.get('annee_bac')?.setValue('');
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('imageData', this.selectedFile);
      formData.append('telephone', this.updateForm?.get('telephone')?.value);
      formData.append(
        'password_etudiant',
        this.updateForm?.get('password')?.value
      );
      formData.append('specialite', this.updateForm?.get('specialite')?.value);
      formData.append(
        'niveau_etude',
        this.updateForm?.get('niveau_etude')?.value
      );
      formData.append(
        'date_naissance',
        this.updateForm?.get('date_naissance')?.value
      );
      formData.append('adresse', this.updateForm?.get('adresse')?.value);
      formData.append('sexe', this.updateForm?.get('sexe')?.value);
      formData.append(
        'lieu_naissance',
        this.updateForm?.get('lieu_naissance')?.value
      );
      formData.append(
        'nationalite',
        this.updateForm?.get('nationalite')?.value
      );
      formData.append('annee_bac', this.updateForm?.get('annee_bac')?.value);
      formData.append(
        'session_bac',
        this.updateForm?.get('session_bac')?.value
      );
      formData.append(
        'section_bac',
        this.updateForm?.get('section_bac')?.value
      );
      formData.append(
        'mention_bac',
        this.updateForm?.get('mention_bac')?.value
      );
      formData.append(
        'moyenne_bac',
        this.updateForm?.get('moyenne_bac')?.value
      );
      formData.append('pays_bac', this.updateForm?.get('pays_bac')?.value);
      formData.append('td', this.updateForm?.get('td')?.value);
      formData.append('cnss', this.updateForm?.get('cnss')?.value);
      formData.append('ville', this.updateForm?.get('ville')?.value);
      formData.append('bio', this.updateForm?.get('bio')?.value);
      formData.append('linkedIn', this.updateForm?.get('linkedin')?.value);
      formData.append('github', this.updateForm?.get('github')?.value);
      formData.append('codepostal', this.updateForm?.get('codepostal')?.value);

      // Send PUT request to update image
      this.http
        .put<any>('http://localhost:8080/etudiant/updates', formData)
        .subscribe({
          next: (response) => {
            console.log(response); // Log the response from the backend
            // Check if the response contains the updated etudiant details
            if (response) {
              console.log('Etudiant details updated successfully');
              this.updateLocalStorage(response); // Update local storage with the updated user data
              this.router.navigate(['/page-principale-etud']);
            } else {
              console.error('Failed to update etudiant details');
              // Handle failed update
            }
          },
          error: (error) => {
            console.error('Error updating etudiant details:', error);
            // Handle error
          },
        });
    } else {
      // If no image selected, directly call the function to update etudiant details
      this.updateEtudiant();
    }
  }

  updateEtudiant() {
    const email = this.email;
    const telephone = this.updateForm?.get('telephone')?.value;
    const password_etudiant = this.updateForm?.get('password')?.value;
    const specialite = this.updateForm?.get('specialite')?.value;
    const niveau_etude = this.updateForm?.get('niveau_etude')?.value;
    const date_naissance = this.updateForm?.get('date_naissance')?.value;
    const adresse = this.updateForm?.get('adresse')?.value;
    const sexe = this.updateForm?.get('sexe')?.value;
    const lieu_naissance = this.updateForm?.get('lieu_naissance')?.value;
    const nationalite = this.updateForm?.get('nationalite')?.value;
    const annee_bac = this.updateForm?.get('annee_bac')?.value;
    const session_bac = this.updateForm?.get('session_bac')?.value;
    const section_bac = this.updateForm?.get('section_bac')?.value;
    const mention_bac = this.updateForm?.get('mention_bac')?.value;
    const moyenne_bac = this.updateForm?.get('moyenne_bac')?.value;
    const pays_bac = this.updateForm?.get('pays_bac')?.value;
    const td = this.updateForm?.get('td')?.value;
    const cnss = this.updateForm?.get('cnss')?.value;
    const ville = this.updateForm?.get('ville')?.value;
    const bio = this.updateForm?.get('bio')?.value;
    const linkedIn = this.updateForm?.get('linkedin')?.value;
    const github = this.updateForm?.get('github')?.value;
    const codepostal = this.updateForm?.get('codepostal')?.value;

    const bodyData = {
      email,
      telephone,
      password_etudiant,
      specialite,
      niveau_etude,
      date_naissance,
      adresse,
      sexe,
      lieu_naissance,
      nationalite,
      annee_bac,
      session_bac,
      section_bac,
      mention_bac,
      moyenne_bac,
      pays_bac,
      td,
      cnss,
      ville,
      bio,
      linkedIn,
      github,
      codepostal,
    };

    // Send PUT request to update etudiant details
    this.http.put('http://localhost:8080/etudiant/update', bodyData).subscribe({
      next: (resultData: any) => {
        console.log(resultData);
        if (resultData) {
          console.log('User details updated successfully');
          this.updateLocalStorage(resultData); // Update local storage with the updated user data
          this.router.navigate(['/page-principale-etud']); // Navigate to the desired page
        } else {
          console.error('Failed to update user details');
          // Handle failed update
        }
        alert('Etudiant details updated successfully');

        // Reset the form after successful update
        this.updateForm?.reset();

        // Navigate to another page if needed
        // this.router.navigateByUrl('/page-principale-etud');
      },
      error: (error) => {
        console.error('Error updating etudiant details:', error);
        // Handle error
      },
    });
  }

  logOut() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  getPhotoUrl() {
    if (this.photoData) {
      const imageUrl = 'http://localhost:8080/images/' + this.photoData;

      console.log('Image URL:', imageUrl);
      return imageUrl;
    } else {
      return 'assets/img/camera.jpg';
    }
  }
  updateLocalStorage(userData: any) {
    // Retrieve current user data from localStorage
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      // Parse the JSON string to convert it back to an object
      let currentUserData = JSON.parse(userDataString);

      // Update relevant fields in the retrieved user data object
      currentUserData.telephone = userData.telephone;
      currentUserData.password_etudiant = userData.password_etudiant;
      currentUserData.specialite = userData.specialite;
      currentUserData.niveau_etude = userData.niveau_etude;
      currentUserData.date_naissance = userData.date_naissance;
      currentUserData.adresse = userData.adresse;
      currentUserData.sexe = userData.sexe;
      currentUserData.lieu_naissance = userData.lieu_naissance;
      currentUserData.nationalite = userData.nationalite;
      currentUserData.annee_bac = userData.annee_bac;
      currentUserData.session_bac = userData.session_bac;
      currentUserData.section_bac = userData.section_bac;
      currentUserData.mention_bac = userData.mention_bac;
      currentUserData.moyenne_bac = userData.moyenne_bac;
      currentUserData.pays_bac = userData.pays_bac;
      currentUserData.td = userData.td;
      currentUserData.cnss = userData.cnss;
      currentUserData.ville = userData.ville;
      currentUserData.bio = userData.bio;
      currentUserData.github = userData.github;
      currentUserData.linkedin = userData.linkedin;
      currentUserData.photoData = userData.photoData;
      currentUserData.codepostal = userData.codepostal;
      // Convert the modified user data back to a JSON string
      const updatedUserDataString = JSON.stringify(currentUserData);

      // Store the updated JSON string back into localStorage
      localStorage.setItem('userData', updatedUserDataString);
    }
  }
}
