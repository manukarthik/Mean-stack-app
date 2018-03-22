import { Component } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  template: `<mat-toolbar>
  Mean App
  <span style="flex:1 1 auto"></span>
  <button mat-button routerLink="/register">Register</button>
  </mat-toolbar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
