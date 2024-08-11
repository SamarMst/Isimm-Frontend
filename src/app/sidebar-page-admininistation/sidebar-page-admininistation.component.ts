import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-page-admininistation',
  templateUrl: './sidebar-page-admininistation.component.html',
  styleUrl: './sidebar-page-admininistation.component.css',
})
export class SidebarPageAdmininistationComponent {
  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}
