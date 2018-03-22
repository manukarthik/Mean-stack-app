import { Component } from '@angular/core';
import { ApiService } from "./api.service";


@Component({
    selector: 'register',
    template: `Register
    <mat-card>
    <mat-card-header>
   <h4> Register New User</h4>
     </mat-card-header>
     <mat-card-content>
      <form>
    <mat-input-container>
   
         <input [(ngModel)]="registerData.email" matInput placeholder="email" name="email" type="email">

    </mat-input-container>
    <mat-input-container>
    <input [(ngModel)]="registerData.password" matInput placeholder="password" name="password " type="password">
    </mat-input-container>
    <button (click)="post()" mat-raised-button color="primary">Register</button>
    </form>
    </mat-card-content>
     </mat-card> `,
   
})
export class RegisterComponent {
    registerData = {}
    constructor(private apiService: ApiService) { }
post(){
    console.log(this.registerData)
    this.apiService.sendUserRegistration(this.registerData)
}
}
