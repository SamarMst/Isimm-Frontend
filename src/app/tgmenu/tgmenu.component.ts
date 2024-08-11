// tgmenu.component.ts
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tgmenu',
  templateUrl: './tgmenu.component.html',
  styleUrls: ['./tgmenu.component.css'],
})
export class TgmenuComponent {
  constructor(private router: Router) {}
  isComponentVisible: boolean = true;

  navigateTo(page: string) {
    // Perform navigation based on the 'page' parameter
    this.isComponentVisible = !this.isComponentVisible;
    switch (page) {
      case 'student':
        this.router.navigate(['/login']);
        break;
      case 'prof':
        this.router.navigate(['/login-prof']);
        break;
      case 'admin':
        this.router.navigate(['/login-admin']);
        break;

      default:
        // Handle invalid page
        break;
    }
  }
}
