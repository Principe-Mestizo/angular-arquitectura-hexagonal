import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTasksComponent } from '../../components/table-tasks/table-tasks.component';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule, TableTasksComponent, MatIconModule,],
  template: `
  <div class="flex items-center mb-4 ">
    <mat-icon class="text-3xl mr-2">tasks</mat-icon>
    <h2 class="text-2xl font-bold">Gestión de Tareas</h2>

  </div>

    <app-table-tasks></app-table-tasks>
  `,
})
export default class ListTasksComponent {


}
