import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegistrationComponent } from './components/registration/registration.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PassportComponent } from './components/passport/passport.component';
import { VisaInformationComponent } from './components/visa-information/visa-information.component';
import { ReferenceAndStayComponent } from './components/reference-and-stay/reference-and-stay.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { ApplicationProcessComponent } from './components/application-process/application-process.component';
<<<<<<< HEAD
import { StatusComponent } from './components/status/status.component';
import { MatTableModule } from '@angular/material/table';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
=======
import { PendingApplicationComponent } from './components/pending-application/pending-application.component';
import {MatTableModule} from '@angular/material/table';
import { HelpfulMaterialModule }   from './components/MatModules';
import { ClaimedApplicationsComponent } from './components/claimed-applications/claimed-applications.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { AddressComponent } from './components/address/address.component';
import { MatRadioModule } from '@angular/material/radio';
import { OfficalFormComponent } from './components/offical-form/offical-form.component';
import { VisaReviewComponent } from './components/review/visa-review/visa-review.component';
>>>>>>> bd550bf4ffea612ae63110a1c2a91dbf73f0a1b6

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    RegistrationComponent,
    LoginComponent,
    ApplicationProcessComponent,

    PersonalInfoComponent,
    PassportComponent,
    VisaInformationComponent,
    ReferenceAndStayComponent,
<<<<<<< HEAD
    StatusComponent,
    ApplicantListComponent,
    ApplicantDetailComponent,
    UploadDocumentsComponent,
=======
    PendingApplicationComponent,
    ClaimedApplicationsComponent,
    SidenavComponent,

    AddressComponent,

    OfficalFormComponent,

    VisaReviewComponent,
    
>>>>>>> bd550bf4ffea612ae63110a1c2a91dbf73f0a1b6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule,
<<<<<<< HEAD
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    NgMatSearchBarModule
=======
    HelpfulMaterialModule,
    MatTableModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule

>>>>>>> bd550bf4ffea612ae63110a1c2a91dbf73f0a1b6
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    },
    {provide: MAT_DATE_LOCALE, useValue: 'en-US'},
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
