import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./informes/informes.module').then( m => m.InformesPageModule)
  },
  {
    path: 'produccion',
    loadChildren: () => import('./produccion/produccion.module').then( m => m.ProduccionPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'tarea-operario',
    loadChildren: () => import('./tarea-operario/tarea-operario.module').then( m => m.TareaOperarioPageModule)
  },
  {
    path: 'asignar-tareas',
    loadChildren: () => import('./asignar-tareas/asignar-tareas.module').then( m => m.AsignarTareasPageModule)
  },
  {
    path: 'reproduccion',
    loadChildren: () => import('./reproduccion/reproduccion.module').then( m => m.ReproduccionPageModule)
  },
  {
    path: 'tareas-veterinario',
    loadChildren: () => import('./tareas-veterinario/tareas-veterinario.module').then( m => m.TareasVeterinarioPageModule)
  },
  {
    path: 'pesonal',
    loadChildren: () => import('./pesonal/pesonal.module').then( m => m.PesonalPageModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'vacuna',
    loadChildren: () => import('./vacuna/vacuna.module').then( m => m.VacunaPageModule)
  },
  {
    path: 'tarea-asignada-admin',
    loadChildren: () => import('./tarea-asignada-admin/tarea-asignada-admin.module').then( m => m.TareaAsignadaAdminPageModule)
  },
  {
    path: 'lista-empleados',
    loadChildren: () => import('./lista-empleados/lista-empleados.module').then( m => m.ListaEmpleadosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
