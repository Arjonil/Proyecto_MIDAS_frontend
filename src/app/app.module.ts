import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './skeleton/navbar/navbar.component';
import { FooterComponent } from './skeleton/footer/footer.component';
import { HOMEComponent } from './pages/home-page/home.component';
import { STRATEGYSComponent } from './pages/strategys-page/strategys.component';
import { MYGOALSComponent } from './pages/mygoals-page/mygoals.component';
import { Page404Component } from './pages/errors/page404/page404.component';
import { PROFILEComponent } from './pages/profile-page/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import { ACORDIONMETASComponent } from './skeleton/acordionmetas/acordionmetas.component';
import { DATOSUSUARIOComponent } from './skeleton/datosusuario/datosusuario.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HOMEComponent,
    STRATEGYSComponent,
    MYGOALSComponent,
    Page404Component,
    PROFILEComponent,
    ACORDIONMETASComponent,
    DATOSUSUARIOComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
