import { Component, OnInit, AfterViewInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteTaskUseCase, GetTaskUseCase } from '../../../../core/aplication/use-cases/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskEntity } from '../../../../core/domain/entities/task.entity';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-table-tasks',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './table-tasks.component.html',
  styleUrl: './table-tasks.component.sass'
})
export class TableTasksComponent implements OnInit, AfterViewInit {
  public task!: TaskEntity;
  public tasks: TaskEntity[] = [];
  private getTasksUserCase = inject(GetTaskUseCase);
  private deleteTaskUseCase = inject(DeleteTaskUseCase);

  getCompleteTasks(completed: boolean) {
    return completed ? 'COMPLETADO' : 'INCOMPLETO'
  }

  displayedColumns: string[] = ['id', 'description', 'completed', 'acciones']

  dataSource = new MatTableDataSource(this.tasks)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterByStatus(status: string) {
    this.dataSource.filterPredicate = (data: TaskEntity, filter: string) => {
      if (filter === 'all') return true;

      return filter === 'completed' ? data.completed : !data.completed;
    }

    this.dataSource.filter = status;
  }

  ngOnInit(): void {
    this.loadDataSource();
  }


  private loadDataSource(): void {
    this.getTasksUserCase.execute().subscribe({
      next: (tasks: TaskEntity[]) => {
        this.tasks = tasks;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error("Error al cargar las tareas", error);
      }
    });
  }

  onDeleteTask(task: TaskEntity) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Este proceso no es reversible. Está a punto de eliminar la tarea "${task.description}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        title: 'text-lg font-bold text-gray-800',
        cancelButton: 'bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-red-500',
        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteTask(task.id);
      }
    });
  }

  deleteTask(taskId: number) {
    this.deleteTaskUseCase.execute(taskId).subscribe({
      next: () => {
        Swal.fire({
          title: 'Eliminado',
          text: 'La tarea ha sido eliminada con éxito.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        this.loadDataSource(); // ?Recargar los datos después de eliminar
      },
      error: (error) => {
        console.error("Error al eliminar la tarea", error);
        Swal.fire('Error', 'No se pudo eliminar la tarea. Por favor, intente de nuevo.', 'error');
      }
    });
  }
}
