import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'login',
    template: `
    <mat-card>
    <mat-card-header>
    <mat-card-title style="margin-left:-8px;">
   <h4> Login</h4>
   </mat-card-title>
     </mat-card-header>
     <mat-card-content>
      <form>
      <mat-input-container>

         <input [(ngModel)]="loginData.name" matInput placeholder="Name" name="name" type="text">

    </mat-input-container>
    <mat-input-container>

         <input [(ngModel)]="loginData.email" matInput placeholder="email" name="email" type="email">

    </mat-input-container>
    <mat-input-container>
    <input [(ngModel)]="loginData.password" matInput placeholder="password" name="password " type="password">
    </mat-input-container>
    <button (click)="post()" mat-raised-button color="primary"  routerLink="/">login</button>
    </form>
    </mat-card-content>
     </mat-card>
     <router-outlet></router-outlet> `,

})
export class LoginComponent {
    loginData = {}

    constructor(private authService: AuthService, public snackBar: MatSnackBar ) { }
    post() {
        this.authService.loginUser(this.loginData)
        if (this.authService.isAuthenticated) {
            this.snackBar.open('you are logged in', 'ok', {
                duration: 3000
            });
        }
    }
}
