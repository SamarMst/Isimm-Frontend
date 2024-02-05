import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenup',
  templateUrl: './contenup.component.html',
  styleUrl: './contenup.component.css'
})
export class ContenupComponent {

  constructor(private router: Router) {}

  navigateToBourseRecherche() {
    // Navigate to the details page or perform any other action on click
    this.router.navigate(['/details']);
  }
  navigateToIntership() {
    // Navigate to the details page or perform any other action on click
    this.router.navigate(['/details']);
  }
  navigateToNotes() {
    // Navigate to the details page or perform any other action on click
    this.router.navigate(['/details']);
  }

}
