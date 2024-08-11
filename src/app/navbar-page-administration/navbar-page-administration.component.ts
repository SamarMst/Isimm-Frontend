import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-page-administration',
  templateUrl: './navbar-page-administration.component.html',
  styleUrl: './navbar-page-administration.component.css',
})
export class NavbarPageAdministrationComponent implements OnInit {
  photoData: string;
  userData: any;

  constructor(private router: Router, private http: HttpClient) {}

  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
  ngOnInit(): void {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      // Parse the JSON string to convert it back to an object
      this.userData = JSON.parse(userDataString);
      this.photoData = this.userData.photoData;

      // Now you can access various properties of userData and use them in your component
      console.log(this.userData);
    }
  }
  getPhotoUrl() {
    if (this.photoData) {
      const imageUrl = 'http://localhost:8080/images/' + this.photoData;

      console.log('Image URL:', imageUrl);
      return imageUrl;
    } else {
      return 'assets/img/user.png';
    }
  }
  logOut() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
}
