import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-paga-admin',
  templateUrl: './sidebar-page-admin.component.html',
  styleUrl: './sidebar-page-admin.component.css',
})
export class SidebarPagaAdminComponent {
  toggleSidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}
