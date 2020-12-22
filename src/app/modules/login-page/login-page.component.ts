import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../store/models/login.i';
import { NotificationStoreFacade } from '../../store/store-facades/notification.store-facade';
@Component({
  selector: 'brc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public token: Login;
  public disabled = false;
  constructor(
    public http: HttpClient,
    private router: Router,
    private notificationStore: NotificationStoreFacade
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.loginForm
      .get('userName')
      .setValue(this.loginForm.get('userName').value.trim());
    this.http
      .post<Login>('http://192.168.4.230:3000/auth', this.loginForm.value)
      .subscribe(
        (token) => {
          this.disabled = true;
          this.token = token;
          sessionStorage.setItem('token', token.accessToken);
          sessionStorage.setItem('userName', token.user.userName);
          sessionStorage.setItem('userId', token.user.id.toString());
          this.notificationStore.loadCountNotification();
          this.router.navigate(['/todo']);
        },
        (err) => {
          this.disabled = false;
          alert('Đăng nhập thất bại');
        }
      );
  }
}
