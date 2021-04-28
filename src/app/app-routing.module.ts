import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { PreadmittedComponent } from './pre-admitted/preadmitted.component';
import { AdmittedComponent } from './admitted/admitted.component';
import { DisposedComponent } from './disposed/disposed.component';
import { AddcaseComponent } from './addcase/addcase.component';
import { CaseinfoComponent } from './caseinfo/caseinfo.component';
import { LoginComponent } from './login/login.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { RegisterComponent } from './register/register.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { AuthGuard } from '../app/auth.guard';
import { EditcaseComponent } from './editcase/editcase.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientCasesComponent } from './client-cases/client-cases.component';
import { ClientCaseinfoComponent } from './client-caseinfo/client-caseinfo.component';
import { ClientChatroomComponent } from './client-chatroom/client-chatroom.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ChatsComponent } from './chats/chats.component';
import { ClientsideChatComponent } from './clientside-chat/clientside-chat.component';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';
import { ClientAuthGuard } from './clientauth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ClientEditProfileComponent } from './client-edit-profile/client-edit-profile.component';
import { LawbookComponent } from './lawbook/lawbook.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cases', component: CasesComponent, canActivate: [AuthGuard] },
  {
    path: 'preadmittedcases',
    component: PreadmittedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admittedcases',
    component: AdmittedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'disposedcases',
    component: DisposedComponent,
    canActivate: [AuthGuard],
  },
  { path: 'addcase', component: AddcaseComponent, canActivate: [AuthGuard] },
  { path: 'caseinfo', component: CaseinfoComponent, canActivate: [AuthGuard] },
  // { path: 'try', component: TryComponent, canActivate: [AuthGuard]},
  {
    path: 'try',
    loadChildren: () => import('./try/module').then((m) => m.TryModule),
  },
  {
    path: 'clientlist',
    component: ClientListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lawyerlist',
    component: LawyerListComponent,
    canActivate: [ClientAuthGuard],
  },
  { path: 'editcase', component: EditcaseComponent, canActivate: [AuthGuard] },
  { path: 'chats', component: ChatsComponent, canActivate: [AuthGuard] },
  { path: 'chatroom', component: ChatroomComponent, canActivate: [AuthGuard] },
  {
    path: 'profile',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loginclient', component: LoginclientComponent },
  { path: 'registerclient', component: RegisterclientComponent },
  {
    path: 'clientdashboard',
    component: ClientDashboardComponent,
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'clientcases',
    component: ClientCasesComponent,
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'clientcaseinfo',
    component: ClientCaseinfoComponent,
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'clientChatroom',
    component: ClientChatroomComponent,
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'lawyerchats',
    component: ClientsideChatComponent,
    canActivate: [ClientAuthGuard],
  },
  {
    path: 'client-profile',
    component: ClientEditProfileComponent,
    canActivate: [ClientAuthGuard],
  },
  { path: 'lawbook', component: LawbookComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard, ClientAuthGuard],
})
export class AppRoutingModule {}
