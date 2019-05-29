import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { ProfilePageEditComponent } from './pages/profile-page/profile-page-edit/profile-page-edit.component';

import { ProfilePageResolver } from './_resolvers/profile-page-resolver.';

import { ProfileService } from './_services/profle/profile.service';
import { CompanyService } from './_services/company/company.service';
import { ProfilePageListComponent } from './pages/profile-page/profile-page-list/profile-page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    LoginComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    ProfilePageEditComponent,
    ProfilePageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
  ],  providers: [ProfileService,CompanyService, ProfilePageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
