import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { ApiService } from '../api.service';


@Component({
    selector: 'register',
    templateUrl:'register.component.html',
   
})
export class RegisterComponent {
    user
    registerData = {}
    constructor(private authService: AuthService, private apiService: ApiService) { }
post(){
   
    this.authService.registerUser(this.registerData)
    console.log(this.registerData)
   
}
}
