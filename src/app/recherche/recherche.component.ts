import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css',
})
export class RechercheComponent {
  constructor(private router: Router) {}
  fen() {
    this.router.navigate(['/tousportrait']);
  }
}
