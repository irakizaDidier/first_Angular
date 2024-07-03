import { Component } from '@angular/core';
import { Item } from '../../models/item.models';
import { Data } from '../../../assets/data/data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  items: Item[] = Data;

  name: string = '';
  email: string = '';
  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
  }
}
