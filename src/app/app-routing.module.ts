import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { PrincipaleComponent } from './principale/principale.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FoyersComponent } from './foyers/foyers.component';
import { RestauComponent } from './restau/restau.component';

const routes: Routes = [
  {path :'club', component: ClubComponent},
  {path :'', component: PrincipaleComponent},
  {path :'formulaire', component: FormulaireComponent},
  {path :'foyers', component: FoyersComponent},
  {path :'restauxUniversitaires', component: RestauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
