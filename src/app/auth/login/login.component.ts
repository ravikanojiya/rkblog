import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: string;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.service.logout();
  }
  onSubmit() {
    this.submitted = true;
    this.service.getlogin(this.loginForm.value).subscribe(res => {
      console.log(res);
      if (res['data'] != '') {
        localStorage.setItem('islogin', 'true');
        const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      }
      else {
        this.loginError = 'Username or password is incorrect.';
        this.router.navigate(['/login']);
      }
    

    }, error => this.error = error);
  }

}
