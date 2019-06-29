import { HttpService } from './../../../services/http.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiURIs } from '../../../../assets/apiURI';

@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.scss']
})
export class LoginRegisterFormComponent implements OnInit {

  @ViewChild('login') loginElem: ElementRef;
  loginRegisterForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  loginApiURI = 'auth/signin';

  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(form) {
    if (this.loginElem.nativeElement.classList.contains('router-link-active')) {
      this.httpService.makePostRequest(this.loginApiURI, form.value).subscribe(singedInUser => {
        localStorage.setItem('token', singedInUser.token);
        this.router.navigate(['/app-dashboard']);
      });
    } else {
      this.httpService.makePostRequest(apiURIs.login, form.value).subscribe(createdUser => {
        console.log(createdUser);
      });
    }
  }

}
