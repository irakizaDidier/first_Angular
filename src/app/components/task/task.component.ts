import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() data!: Item;
}
