import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService2 } from '../../auth.service';
import { Router } from '@angular/router';
import { User } from './../../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginMessage: string;
  hidePassword0 = true;
  hidePassword1 = true;
  hidePassword2 = true;
  goodpw: boolean;
  regUser: User;



  loginForm = this.fb.group({
    loginUsername: ['', [Validators.required]],
    loginPassword: ['', [Validators.required]],
  });
  get loginUsername() { return this.loginForm.get('loginUsername'); }
  get loginPassword() { return this.loginForm.get('loginPassword'); }



  registerForm = this.fb.group({
    registerUsername: ['', [Validators.required]],
    registerPassword: ['', [Validators.required]],
    registerPasswordagain: ['', [Validators.required]],
  });
  get registerUsername() { return this.registerForm.get('registerUsername'); }
  get registerPassword() { return this.registerForm.get('registerPassword'); }
  get registerPasswordagain() { return this.registerForm.get('registerPasswordagain'); }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService2,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onLoginSubmit() {
    const success = await this.authService.login(
      this.loginUsername.value,
      this.loginPassword.value
    );
    if (success) {
      const url = this.authService.redirectUrl
        ? this.authService.redirectUrl
        : '/profile';
      this.router.navigate([url]);
    } else {
      this.loginMessage = 'Cannot log in.';
    }

  }

  async onRegsiterSubmit() {
    this.goodpw = (this.registerPassword.value == this.registerPasswordagain.value);

    if (this.goodpw) {
      this.regUser = new User();
      this.regUser.username = this.registerUsername.value;
      this.regUser.password = this.registerPassword.value;
      this.regUser.enabled = true;
      this.regUser.role = 'ROLE_USER';
      this.regUser.reference = '';
      this.regUser.description = '';
      this.regUser.rates = 0;
      this.regUser.voters = 0;
      this.regUser.img = '';
      this.regUser.email = '';
      this.regUser = await this.authService.register(this.regUser);
      const success = await this.authService.login(
        this.regUser.username,
        this.regUser.password
      );
      if (success && this.regUser != null) {
        const url = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : '/profile';
        this.router.navigate([url]);
      } else {
        this.message = 'Error in registration!';
      }
    } else {
      this.message = 'Wrong password!';
    }

    /* if (this.regUser != null) {
       const url = this.authService.redirectUrl
         ? this.authService.redirectUrl
         : '/profile';
       this.router.navigate([url]);
     } else {
       this.message = 'Error in registration!';
     }*/
  }


}


