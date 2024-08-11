import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-principale-professeur',
  templateUrl: './page-principale-professeur.component.html',
  styleUrl: './page-principale-professeur.component.css',
})
export class PagePrincipaleProfesseurComponent {
  isLightMode: boolean = true;
  message: string;

  constructor(
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit() {}

  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
  logOut() {
    this.router.navigate(['/']);
  }
}
