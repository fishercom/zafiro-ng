import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualidadComentariosComponent } from './components/pages/actualidad-comentarios/actualidad-comentarios.component';
import { ActualidadTutorialesComponent } from './components/pages/actualidad-tutoriales/actualidad-tutoriales.component';
import { ActualidadComponent } from './components/pages/actualidad/actualidad.component';
import { CulturaClimaComponent } from './components/pages/cultura-clima/cultura-clima.component';
import { CulturaDetalleComponent } from './components/pages/cultura-detalle/cultura-detalle.component';
import { CulturaEquidadComponent } from './components/pages/cultura-equidad/cultura-equidad.component';
import { CulturaProtagonistasComponent } from './components/pages/cultura-protagonistas/cultura-protagonistas.component';
import { CulturaTalentoComponent } from './components/pages/cultura-talento/cultura-talento.component';
import { CulturaComponent } from './components/pages/cultura/cultura.component';
import { DirectivosComponent } from './components/pages/directivos/directivos.component';
import { EncuentrenosComponent } from './components/pages/encuentrenos/encuentrenos.component';
import { FinanzasComponent } from './components/pages/finanzas/finanzas.component';
import { HomeComponent } from './components/pages/home/home.component';
import { OrganizacionComponent } from './components/pages/organizacion/organizacion.component';

const routes: Routes = [
  {path: 'organizacion', component: OrganizacionComponent},
  {path: 'cultura', component: CulturaComponent},
  {path: 'cultura-clima', component: CulturaClimaComponent},
  {path: 'cultura-detalle', component: CulturaDetalleComponent},
  {path: 'cultura-equidad', component: CulturaEquidadComponent},
  {path: 'cultura-protagonistas', component: CulturaProtagonistasComponent},
  {path: 'cultura-talento', component: CulturaTalentoComponent},
  {path: 'directivos', component: DirectivosComponent},
  {path: 'finanzas', component: FinanzasComponent},
  {path: 'actualidad', component: ActualidadComponent},
  {path: 'actualidad-comentarios', component: ActualidadComentariosComponent},
  {path: 'actualidad-tutoriales', component: ActualidadTutorialesComponent},
  {path: 'encuentrenos', component: EncuentrenosComponent},

  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
