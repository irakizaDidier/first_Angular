import { Component } from '@angular/core';
import { Item } from '../../models/item.interface';
import { Data } from '../../../assets/data/data';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  data: Item[] = Data;
}
