import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadComponent } from './thread/thread.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const baseUrl: string = 'https://cc18594.whatsalon.com/api/';
const routes: Routes = [
  { path: '', redirectTo: 'Thread'},
  { path: 'Thread/get?thread_id=:id', component: ThreadComponent},
  { path: 'Account/get_user_profile?user_id=:id', component: AccountComponent},
  { path: 'Account/register', component: RegisterComponent},
  { path: 'Account/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
