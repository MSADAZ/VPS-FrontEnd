import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationProcessComponent } from './components/application-process/application-process.component';
import { StatusComponent } from './components/status/status.component';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { PendingApplicationComponent } from './components/pending-application/pending-application.component';
import { ClaimedApplicationsComponent } from './components/claimed-applications/claimed-applications.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddressComponent } from './components/address/address.component';
import { ApplicantStatusComponent } from './components/applicant-status/applicant-status.component';





const routes: Routes = [
  {path: 'apply', component: MainComponentComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'application-process', component: ApplicationProcessComponent},
  {path: 'status', component: StatusComponent},
  {path: 'ApplicantList', component: ApplicantListComponent},
  {path: 'detail', component: ApplicantDetailComponent},
  {path: 'pending', component: PendingApplicationComponent},
  {path: 'applicatStatus', component: ApplicantStatusComponent},

  {path: 'side', component: SidenavComponent, children: [
    {
      path: 'claimed', component: ClaimedApplicationsComponent
    }
  ]},
  {path: 'address', component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
