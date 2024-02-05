// tgmenu.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tgmenu',
  templateUrl: './tgmenu.component.html',
  styleUrls: ['./tgmenu.component.css']
})
export class TgmenuComponent {
  icons = ['fa-solid fa-user','fa-solid fa-user-tie','fa-solid fa-users']; //icons names
  isNavOpen = false;
  isAddIcon = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.isAddIcon = !this.isAddIcon;
  }

  onDrag(event: MouseEvent) {
    // Handle the drag logic if needed
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    // Handle the mouseup logic if needed
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    // Handle the mouseleave logic if needed
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    // Handle the mousedown logic if needed
  }
}
