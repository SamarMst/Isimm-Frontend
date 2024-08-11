import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-modification-profile',
  templateUrl: './admin-modification-profile.component.html',
  styleUrl: './admin-modification-profile.component.css',
})
export class AdminModificationProfileComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null; // Variable to hold the image URL
  updateForm: FormGroup | undefined;
  userData: any;
  name: string;
  photoData: string; // Contains the image file name
  cin: string;
  nom: string;
  email: string;
  bio: string;
  titre: string;
  test: boolean;

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
        titre: [''],
        ville: [''],
        codepostal: [''],
        date_naissance: [''],
        lieu_naissance: [''],
        sexe: [''],
        cnss: [''],
        nationalite: [''],
        password: [''],
        confirmPassword: [''],
      },
      { validator: this.passwordMathValidator }
    );
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      // Parse the JSON string to convert it back to an object
      this.userData = JSON.parse(userDataString);
      this.photoData = this.userData.photoData;
      this.cin = this.userData.cin_admin;
      this.nom = this.userData.nom_admin;
      this.email = this.userData.email;
      this.bio = this.userData.bio;
      this.titre = this.userData.titre;
      console.log(this.userData);
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

  onSubmit() {
    if (this.selectedFile) {
      this.test = true;
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('imageData', this.selectedFile);
      formData.append('telephone', this.updateForm?.get('telephone')?.value);
      formData.append('password', this.updateForm?.get('password')?.value);
      formData.append('titre', this.updateForm?.get('titre')?.value);
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
      formData.append('cnss', this.updateForm?.get('cnss')?.value);
      formData.append('ville', this.updateForm?.get('ville')?.value);
      formData.append('bio', this.updateForm?.get('bio')?.value);
      formData.append('codepostal', this.updateForm?.get('codepostal')?.value);

      // Send PUT request to update image
      this.http
        .put<any>('http://localhost:8080/admin/updates', formData)
        .subscribe({
          next: (response) => {
            console.log(response); // Log the response from the backend
            // Check if the response contains the updated Admin details
            if (response) {
              console.log('Admin details updated successfully');
              this.updateLocalStorage(response); // Update local storage with the updated user data
              this.router.navigate(['/page-principale-administation']);
            } else {
              console.error('Failed to update Admin details');
              // Handle failed update
            }
          },
          error: (error) => {
            console.error('Error updating Admin details:', error);
            // Handle error
          },
        });
    } else {
      this.test = false;
      // If no image selected, directly call the function to update Admin details
      this.updateAdmin();
    }
  }

  isBodyDataDefined(bodyData: any): boolean {
    for (const key in bodyData) {
      if (bodyData[key] === null || bodyData[key] === undefined) {
        return false;
      }
    }
    return true;
  }

  updateAdmin() {
    const email = this.email;
    const telephone = this.updateForm?.get('telephone')?.value;
    const password = this.updateForm?.get('password')?.value;
    const titre = this.updateForm?.get('titre')?.value;
    const niveau_etude = this.updateForm?.get('niveau_etude')?.value;
    const date_naissance = this.updateForm?.get('date_naissance')?.value;
    const adresse = this.updateForm?.get('adresse')?.value;
    const sexe = this.updateForm?.get('sexe')?.value;
    const lieu_naissance = this.updateForm?.get('lieu_naissance')?.value;
    const nationalite = this.updateForm?.get('nationalite')?.value;
    const cnss = this.updateForm?.get('cnss')?.value;
    const ville = this.updateForm?.get('ville')?.value;
    const bio = this.updateForm?.get('bio')?.value;
    const codepostal = this.updateForm?.get('codepostal')?.value;

    const bodyData = {
      email,
      telephone,
      password,
      titre,
      niveau_etude,
      date_naissance,
      adresse,
      sexe,
      lieu_naissance,
      nationalite,
      cnss,
      ville,
      bio,
      codepostal,
    };
    if (this.isBodyDataDefined(bodyData) || this.test) {
      // Send PUT request to update admin details
      this.http.put('http://localhost:8080/admin/update', bodyData).subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          if (resultData) {
            console.log('Admin details updated successfully');
            this.updateLocalStorage(resultData); // Update local storage with the updated user data
            this.router.navigate(['/page-principale-administration']); // Navigate to the desired page
          } else {
            console.error('Failed to update Admin details');
            // Handle failed update
          }
          alert('Admin details updated successfully');

          // Reset the form after successful update
          this.updateForm?.reset();

          // Navigate to another page if needed
          // this.router.navigateByUrl('/page-principale-etud');
        },
        error: (error) => {
          console.error('Error updating admin details:', error);
          // Handle error
        },
      });
    } else {
    }
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
      currentUserData.password = userData.password;
      currentUserData.titre = userData.titre;
      currentUserData.date_naissance = userData.date_naissance;
      currentUserData.adresse = userData.adresse;
      currentUserData.sexe = userData.sexe;
      currentUserData.lieu_naissance = userData.lieu_naissance;
      currentUserData.nationalite = userData.nationalite;
      currentUserData.cnss = userData.cnss;
      currentUserData.ville = userData.ville;
      currentUserData.bio = userData.bio;
      currentUserData.photoData = userData.photoData;
      currentUserData.codepostal = userData.codepostal;
      // Convert the modified user data back to a JSON string
      const updatedUserDataString = JSON.stringify(currentUserData);

      // Store the updated JSON string back into localStorage
      localStorage.setItem('userData', updatedUserDataString);
    }
  }
}
