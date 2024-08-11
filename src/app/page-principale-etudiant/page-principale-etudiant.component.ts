import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-principale-etudiant',
  templateUrl: './page-principale-etudiant.component.html',
  styleUrls: ['./page-principale-etudiant.component.css'],
})
export class PagePrincipaleEtudiantComponent implements OnInit {
  message: string;
  userData: any;
  name: string;
  photoData: string;
  bio: string;
  github: string;
  linkedIn: string;

  // Base URL where the images are stored on the server
  private baseUrl = 'http://localhost:8080/src/main/webapp/images/';

  constructor(
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      // Parse the JSON string to convert it back to an object
      this.userData = JSON.parse(userDataString);
      this.name = this.userData.nom_etudiant;
      this.photoData = this.userData.photoData;
      this.bio = this.userData.bio;
      this.github = this.userData.github;
      this.linkedIn = this.userData.linkedIn;
      // Now you can access various properties of userData and use them in your component
      console.log(this.userData);
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
      return 'assets/img/camera.png';
    }
  }
}
