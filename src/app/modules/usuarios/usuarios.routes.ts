import { Routes } from "@angular/router";



export const USUARIOS_ROUTES: Routes = [

  {
    path: 'lista-usuarios',
    loadComponent: () => import('./pages/usuarios-list/usuarios-list.component'),
    data: { breadcrumb: 'Listado de Usuairos' }
  }

]