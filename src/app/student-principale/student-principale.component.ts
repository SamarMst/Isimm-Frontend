import { Component } from '@angular/core';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-student-principale',
  templateUrl: './student-principale.component.html',
  styleUrl: './student-principale.component.css',
})
export class StudentPrincipaleComponent {
  expandSidebar = false;
  message: string;

  constructor(private service: JwtService) {}

  ngOnInit() {
    this.hello();
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
    });
  }

  toggleSidebar() {
    this.expandSidebar = !this.expandSidebar;
  }
}
