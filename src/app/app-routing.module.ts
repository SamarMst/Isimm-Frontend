import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { PrincipaleComponent } from './principale/principale.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path :'club', component: ClubComponent},
  {path :'', component: PrincipaleComponent},
  {path :'formulaire', component: FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
