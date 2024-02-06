import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TgmenuComponent } from './tgmenu/tgmenu.component';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { ContenupComponent } from './contenup/contenup.component';
import { ClubComponent } from './club/club.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FoyersComponent } from './foyers/foyers.component';
import { PrincipaleComponent } from './principale/principale.component';


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
    PrincipaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
