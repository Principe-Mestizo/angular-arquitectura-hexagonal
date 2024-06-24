import { Routes } from "@angular/router";
import LayoutComponent from "./layout/main-layout/layout.component";



export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.routes').then( m => m.DASHBOARD_ROUTES),
        title: 'App - Dashboard',
        data: { breadcrumb: 'Dashboard' }
      },
      {

        path: 'tareas',
        loadChildren: () => import('../task/task.routes').then( m => m.TASK_ROUTES),
        title: 'App - tareas',
        data: { breadcrumb: 'Tareas' }
      },

      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES),
        title: 'App - Usuarios',
        data: { breadcrumb: 'Usuarios' }
      }

    ]
  }
];