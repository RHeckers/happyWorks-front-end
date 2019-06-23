import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/pageElements/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/pageElements/side-bar/side-bar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginRegisterFormComponent } from './components/pageElements/login-register-form/login-register-form.component';
import { AuthInterceptorService } from './interceptor/auth.interceptor';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MultipleChoiseElementComponent } from './components/pageElements/multiple-choise-element/multiple-choise-element.component';
import { FeedbackScreenComponent } from './components/pageElements/feedback-screen/feedback-screen.component';
import { ScoreSliderComponent } from './components/pageElements/score-slider/score-slider.component';
import { RangeSelectionComponent } from './components/pageElements/range-selection/range-selection.component';
import { CreateFeedbackSessionComponent } from './components/pages/create-feedback-session/create-feedback-session.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginRegisterFormComponent,
    DashboardComponent,
    MultipleChoiseElementComponent,
    FeedbackScreenComponent,
    ScoreSliderComponent,
    RangeSelectionComponent,
    CreateFeedbackSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
