import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ActualidadComponent } from './components/pages/actualidad/actualidad.component';
import { ActualidadComentariosComponent } from './components/pages/actualidad-comentarios/actualidad-comentarios.component';
import { ActualidadTutorialesComponent } from './components/pages/actualidad-tutoriales/actualidad-tutoriales.component';
import { CulturaComponent } from './components/pages/cultura/cultura.component';
import { CulturaDetalleComponent } from './components/pages/cultura-detalle/cultura-detalle.component';
import { CulturaProtagonistasComponent } from './components/pages/cultura-protagonistas/cultura-protagonistas.component';
import { CulturaTalentoComponent } from './components/pages/cultura-talento/cultura-talento.component';
import { CulturaClimaComponent } from './components/pages/cultura-clima/cultura-clima.component';
import { CulturaEquidadComponent } from './components/pages/cultura-equidad/cultura-equidad.component';
import { OrganizacionComponent } from './components/pages/organizacion/organizacion.component';
import { DirectivosComponent } from './components/pages/directivos/directivos.component';
import { FinanzasComponent } from './components/pages/finanzas/finanzas.component';
import { EncuentrenosComponent } from './components/pages/encuentrenos/encuentrenos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActualidadComponent,
    ActualidadComentariosComponent,
    ActualidadTutorialesComponent,
    CulturaComponent,
    CulturaDetalleComponent,
    CulturaProtagonistasComponent,
    CulturaTalentoComponent,
    CulturaClimaComponent,
    CulturaEquidadComponent,
    OrganizacionComponent,
    DirectivosComponent,
    FinanzasComponent,
    EncuentrenosComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
