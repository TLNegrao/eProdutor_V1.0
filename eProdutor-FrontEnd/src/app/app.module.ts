import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PutDashboardComponent } from './components/put-dashboard/put-dashboard.component';
import { CpfFormatPipe } from './services/pipe/cpf-format.pipe';
import { CnpjFormatPipe } from './services/pipe/cnpj-format.pipe';
import { MqhectaresPipe } from './services/pipe/mqhectares.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileCardComponent,
    PutDashboardComponent,
    CpfFormatPipe,
    CnpjFormatPipe,
    MqhectaresPipe,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
