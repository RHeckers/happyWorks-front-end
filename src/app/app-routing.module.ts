import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imported components
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CreateFeedbackSessionComponent } from './components/pages/create-feedback-session/create-feedback-session.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registreren', component: RegisterComponent},
  { path: 'app-dashboard', component: DashboardComponent},
  { path: 'company-dashboard/create-feedback-session', component: CreateFeedbackSessionComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
