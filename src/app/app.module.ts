import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { AddcaseComponent } from './addcase/addcase.component';
import { CaseinfoComponent } from './caseinfo/caseinfo.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { AuthInterceptor } from './auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { EditcaseComponent } from './editcase/editcase.component';
// import { TryComponent } from './try/try.component';
import { PreadmittedComponent } from './pre-admitted/preadmitted.component';
import { AdmittedComponent } from './admitted/admitted.component';
import { DisposedComponent } from './disposed/disposed.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientMainNavComponent } from './client-main-nav/client-main-nav.component';
import { ClientCasesComponent } from './client-cases/client-cases.component';
import { ClientCaseinfoComponent } from './client-caseinfo/client-caseinfo.component';
import { ClientChatroomComponent } from './client-chatroom/client-chatroom.component';
import { ChatsComponent } from './chats/chats.component';
import { ClientsideChatComponent } from './clientside-chat/clientside-chat.component';

import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './demo-utils/module';
// import { TryModule } from "./try/module";
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ToastrModule } from 'ngx-toastr';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ClientEditProfileComponent } from './client-edit-profile/client-edit-profile.component';
import { LawbookComponent } from './lawbook/lawbook.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddcaseComponent,
    CaseinfoComponent,
    CasesComponent,
    DashboardComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent,
    LoginclientComponent,
    RegisterclientComponent,
    HomepageComponent,
    ErrorComponent,
    EditcaseComponent,
    PreadmittedComponent,
    AdmittedComponent,
    DisposedComponent,
    ChatroomComponent,
    ClientDashboardComponent,
    ClientMainNavComponent,
    ClientCasesComponent,
    ClientCaseinfoComponent,
    ClientChatroomComponent,
    ClientListComponent,
    ChatsComponent,
    ClientsideChatComponent,
    LawyerListComponent,
    EditProfileComponent,
    ClientEditProfileComponent,
    LawbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CKEditorModule,
    MatTableModule,
    NgbModalModule,
    DemoUtilsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    // TryModule,
    FlatpickrModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Tells Angular we will have custom tags in our templates
  ],
})
export class AppModule {}
