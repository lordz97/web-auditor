import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditComponent } from './Component/audit/audit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { RouterModule } from '@angular/router';
import { Route } from './shared/routes';
import { NgChartsModule } from 'ng2-charts';
import { ResultsComponent } from './Component/results/results.component';
import { DocumentationComponent } from './Component/documentation/documentation.component';
import { AppnameComponent } from './Component/appname/appname.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { HistoryComponent } from './Component/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    AppnameComponent,
    AuditComponent,
    NavbarComponent,
    HomeComponent,
    ResultsComponent,
    DocumentationComponent,
    LoginComponent,
    HistoryComponent,
  ],
  imports: [
    RouterModule.forRoot(Route),
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
