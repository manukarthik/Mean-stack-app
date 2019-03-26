import { Component, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective} from '@angular/forms'
import { AuthService } from "../auth.service";
import { ApiService } from '../api.service';
import { Subject} from 'rxjs'
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
    selector: 'register',
    templateUrl:'register.component.html',

})

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective  | null): boolean {
//       const isSubmitted = form && form.submitted;
//       return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//     }
//   }
  
export class RegisterComponent {
    registerForm : FormGroup;
    @ViewChild('formReg') public formRegister: any;
    user;
    public registerData = {}
    constructor(private authService: AuthService, private apiService: ApiService, private fb: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            email : ['', Validators.required],
            password : ['', Validators.required],
            name:  [''],
            imgname: [''],
            description : ['']
        })
    }

onSubmit() : void {
    console.log(this.registerForm);
    //this.authService.registerUser(this.registerForm)
}
}
