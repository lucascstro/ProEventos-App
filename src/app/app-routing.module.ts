import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"eventos", component: EventosComponent},
  {path:"palestrantes", component: PalestrantesComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"contatos", component: ContatosComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"", redirectTo:"dashboard",pathMatch: "full"},
  {path:"**", redirectTo:"dashboard",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
