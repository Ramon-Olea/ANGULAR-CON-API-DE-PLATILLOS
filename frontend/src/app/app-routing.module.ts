import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PlatillosComponent } from './componentes/platillos/platillos.component';
import { IngredientesComponent } from './componentes/ingredientes/ingredientes.component';

import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'platillos/:id', component: PlatillosComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
