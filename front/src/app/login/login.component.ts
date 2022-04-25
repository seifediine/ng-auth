import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  loginUser() {
    this._auth
      .loginUser({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
