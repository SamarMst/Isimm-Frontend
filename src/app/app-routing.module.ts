import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { PrincipaleComponent } from './principale/principale.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FoyersComponent } from './foyers/foyers.component';
import { RestauComponent } from './restau/restau.component';
import { StudentPrincipaleComponent } from './student-principale/student-principale.component';
import { IsimmComponent } from './isimm/isimm.component';
import { LoginComponent } from './login/login.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormationComponent } from './formation/formation.component';
import { DepartementComponent } from './departement/departement.component';
import { ConsultationEntreprisesComponent } from './consultation-entreprises/consultation-entreprises.component';
import { AfficheoffreComponent } from './afficheoffre/afficheoffre.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TousportraitComponent } from './tousportrait/tousportrait.component';
import { EvenmentsComponent } from './evenments/evenments.component';
import { PagePrincipaleEtudiantComponent } from './page-principale-etudiant/page-principale-etudiant.component';
import { SigupEtudiantComponent } from './sigup-etudiant/sigup-etudiant.component';
import { QuatrecComponent } from './quatrec/quatrec.component';
import { PagePrincipaleAdministrationComponent } from './page-principale-administration/page-principale-administration.component';
import { SignupAdministrationComponent } from './signup-administration/signup-administration.component';
import { SignupProfesseurComponent } from './signup-professeur/signup-professeur.component';
import { PagePrincipaleProfesseurComponent } from './page-principale-professeur/page-principale-professeur.component';
import { AjoutActualiteComponent } from './ajout-actualite/ajout-actualite.component';
import { EtudiantModificationProfileComponent } from './etudiant-modification-profile/etudiant-modification-profile.component';
import { AdminModificationProfileComponent } from './admin-modification-profile/admin-modification-profile.component';

const routes: Routes = [
  { path: 'club', component: ClubComponent },
  { path: '', component: PrincipaleComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'foyers', component: FoyersComponent },
  { path: 'restauxUniversitaires', component: RestauComponent },
  { path: 'login', component: LoginComponent },
  { path: 'isimm', component: IsimmComponent },
  { path: 'login-prof', component: LoginProfComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'departement', component: DepartementComponent },
  {
    path: 'consultation-entreprise',
    component: ConsultationEntreprisesComponent,
  },
  { path: 'offres-stages', component: AfficheoffreComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'tousportrait', component: TousportraitComponent },
  { path: 'evenments', component: EvenmentsComponent },
  { path: 'page-principale-etud', component: PagePrincipaleEtudiantComponent },
  { path: 'signup', component: SigupEtudiantComponent },
  { path: '4c', component: QuatrecComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  {
    path: 'page-principale-administration',
    component: PagePrincipaleAdministrationComponent,
  },
  { path: 'signup-admin', component: SignupAdministrationComponent },
  { path: 'signup-prof', component: SignupProfesseurComponent },
  {
    path: 'page-principale-prof',
    component: PagePrincipaleProfesseurComponent,
  },
  {
    path: 'ajout-actualite',
    component: AjoutActualiteComponent,
  },
  {
    path: 'modif-etud',
    component: EtudiantModificationProfileComponent,
  },
  {
    path: 'modif-admin',
    component: AdminModificationProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
