import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollable-navbar',
  templateUrl: './scrollable-navbar.component.html',
  styleUrls: ['./scrollable-navbar.component.css']
})
export class ScrollableNavbarComponent {
  menuItems = [
    { link: 'https://www.episup.com/fr/inscription', label: 'Inscription' },
    { link: '/fr/actualites', label: 'Actualités' },
    { link: '/fr/contact', label: 'Contact' },
    { link: 'https://myepiapp.com/', label: 'MY EPI APP', target: '_blank' }
  ];
}
