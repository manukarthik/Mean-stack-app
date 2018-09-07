import { Component } from '@angular/core';
import { ApiService } from "./api.service";
import { AuthService } from './auth.service';
import { NavService } from './nav.service';

@Component({
  selector: "app-root",
  styleUrls: ["./app.css"],
  templateUrl: "app.component.html"
})
export class AppComponent {
  TOKEN_KEY = "token";
  profile;
  subscription: any;
  loginData: any = undefined;
  public user;
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private navService: NavService
  ) {}
  title = "app";
  ngOnInit() {
    const tok = this.authService.token;
    console.log(tok);
    this.subscription = this.navService
      .getNavChangeEmitter()
      .subscribe(loginData => this.loginUser(loginData));
  }
  loginUser(loginData: any) {
    console.log("hey" + loginData.name);
    this.loginData = loginData;
    return this.loginData;
  }
}
