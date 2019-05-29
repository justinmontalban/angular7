import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { ProfilePageEditComponent } from './pages/profile-page/profile-page-edit/profile-page-edit.component';
import { ProfilePageResolver } from './_resolvers/profile-page-resolver.';
import { ProfilePageListComponent } from './pages/profile-page/profile-page-list/profile-page-list.component';

const routes: Routes = [


  // app-layout
 { path: '',
   component: AppLayoutComponent,
   children: [ //resolve use to preload data
     { path: 'profile',  component: ProfilePageComponent , resolve: { userProfile: ProfilePageResolver } },
     { path: 'profile/edit',  component: ProfilePageEditComponent , resolve: { userProfile: ProfilePageResolver } },
     { path: 'companies',  component: ProfilePageListComponent , resolve: { userProfile: ProfilePageResolver } },
             ]
},
  // no layout or different layout
    { path: 'login', component: LoginComponent },
    // no layout  or different layout
    { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
