import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MainContactosComponent } from './contactos/main-contactos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'formularios', loadChildren: './formularios/formularios.module#FormulariosModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'tareasrx', loadChildren: './tareas-rx/tareas-rx.module#TareasRxModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
  { path: 'contactos', component: MainContactosComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

  // { path: 'formularios', component: FormulariosComponent},
  // { path: 'tareas', component: TareasComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
