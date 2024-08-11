import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TgmenuComponent } from './tgmenu/tgmenu.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { ContenupComponent } from './contenup/contenup.component';
import { ClubComponent } from './club/club.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FoyersComponent } from './foyers/foyers.component';
import { PrincipaleComponent } from './principale/principale.component';
import { LoginComponent } from './login/login.component';
import { RestauComponent } from './restau/restau.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentPrincipaleComponent } from './student-principale/student-principale.component';
import { IsimmComponent } from './isimm/isimm.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormationComponent } from './formation/formation.component';
import { DepartementComponent } from './departement/departement.component';
import { ConsultationEntreprisesComponent } from './consultation-entreprises/consultation-entreprises.component';
import { AfficheoffreComponent } from './afficheoffre/afficheoffre.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SottoheaderComponent } from './sottoheader/sottoheader.component';
import { TousportraitComponent } from './tousportrait/tousportrait.component';
import { EvenmentsComponent } from './evenments/evenments.component';
import { PagePrincipaleEtudiantComponent } from './page-principale-etudiant/page-principale-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigupEtudiantComponent } from './sigup-etudiant/sigup-etudiant.component';
import { RouterModule, Routes } from '@angular/router';
import { QuatrecComponent } from './quatrec/quatrec.component';
import { SignupAdministrationComponent } from './signup-administration/signup-administration.component';
import { PagePrincipaleAdministrationComponent } from './page-principale-administration/page-principale-administration.component';
import { SignupProfesseurComponent } from './signup-professeur/signup-professeur.component';
import { PagePrincipaleProfesseurComponent } from './page-principale-professeur/page-principale-professeur.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AjoutActualiteComponent } from './ajout-actualite/ajout-actualite.component';
import { NavbarPagaAdminComponent } from './navbar-paga-admin/navbar-paga-admin.component';
import { SidebarPagaAdminComponent } from './sidebar-page-admin/sidebar-page-admin.component';
import { AdministrationConfEtudiantComponent } from './administration-conf-etudiant/administration-conf-etudiant.component';
import { AdministrationConfProfComponent } from './administration-conf-prof/administration-conf-prof.component';
import { EtudiantModificationProfileComponent } from './etudiant-modification-profile/etudiant-modification-profile.component';
import { SidebarPageAdmininistationComponent } from './sidebar-page-admininistation/sidebar-page-admininistation.component';
import { NavbarPageAdministrationComponent } from './navbar-page-administration/navbar-page-administration.component';
import { AdminModificationProfileComponent } from './admin-modification-profile/admin-modification-profile.component';
import { ProfModificationProfileComponent } from './prof-modification-profile/prof-modification-profile.component';
import { NavbarPageProfComponent } from './navbar-page-prof/navbar-page-prof.component';
import { SidebarPageProfComponent } from './sidebar-page-prof/sidebar-page-prof.component';
import { AjoutEmploiComponent } from './ajout-emploi/ajout-emploi.component';
import { AjoutCoursComponent } from './ajout-cours/ajout-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TgmenuComponent,
    FooterComponent,
    ContenupComponent,
    ClubComponent,
    FormulaireComponent,
    FoyersComponent,
    PrincipaleComponent,
    RestauComponent,
    StudentPrincipaleComponent,
    IsimmComponent,
    LoginProfComponent,
    LoginAdminComponent,
    FormationComponent,
    DepartementComponent,
    ConsultationEntreprisesComponent,
    AfficheoffreComponent,
    RechercheComponent,
    SottoheaderComponent,
    TousportraitComponent,
    EvenmentsComponent,
    PagePrincipaleEtudiantComponent,
    SigupEtudiantComponent,
    LoginComponent,
    QuatrecComponent,
    SignupAdministrationComponent,
    PagePrincipaleAdministrationComponent,
    SignupProfesseurComponent,
    PagePrincipaleProfesseurComponent,
    ActualiteComponent,
    AjoutActualiteComponent,
    NavbarPagaAdminComponent,
    SidebarPagaAdminComponent,
    AdministrationConfEtudiantComponent,
    AdministrationConfProfComponent,
    EtudiantModificationProfileComponent,
    SidebarPageAdmininistationComponent,
    NavbarPageAdministrationComponent,
    AdminModificationProfileComponent,
    ProfModificationProfileComponent,
    NavbarPageProfComponent,
    SidebarPageProfComponent,
    AjoutEmploiComponent,
    AjoutCoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
