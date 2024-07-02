import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name: string = '';
  email: string = '';
  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
  }
}
