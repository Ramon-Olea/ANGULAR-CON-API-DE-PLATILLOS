import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './componentes/tarjeta-credito/tarjeta-credito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PlatillosComponent } from './componentes/platillos/platillos.component';
import { IngredientesComponent } from './componentes/ingredientes/ingredientes.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import { MatCarouselModule } from 'ng-mat-carousel';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    MenuComponent,
    PerfilComponent,
    PlatillosComponent,
    IngredientesComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatTreeModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
