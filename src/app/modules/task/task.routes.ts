

import { Routes } from '@angular/router';


export const TASK_ROUTES: Routes = [

  {
    path: 'lista-tareas',
    loadComponent: () => import('./pages/list-tasks/list-tasks.component'),
    data: { breadcrumb: 'Listado de Tareas' }
  },

  {
    path: '**',
    redirectTo: 'lista-tareas'
  }

];