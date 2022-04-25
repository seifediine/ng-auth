import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth
      .registerUser({
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
