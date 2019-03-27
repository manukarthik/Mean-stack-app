import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from "../auth.service";
import { ApiService } from '../api.service';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';

@Component({
    selector: 'register',
    templateUrl:'register.component.html',

})
export class RegisterComponent {
    registerForm : FormGroup;
    matcher = new MyErrorStateMatcher();
    @ViewChild('formReg') public formRegister: any;
    user;
    public registerData = {}

    constructor(private authService: AuthService, private apiService: ApiService, private fb: FormBuilder) { }

    

    ngOnInit() {
        this.registerForm = this.fb.group({
            email : ['', Validators.required],
            password : [''],
            confirmPassword: [''],
            name:  [''],
            imgname: [''],
            description : ['']
        }, {validator: this.checkPasswords })
    }

 checkPasswords(group: FormGroup) { // here we have the 'passwords' group
 console.log(group);
  let pass = group.controls.password.value;
  let confirmPass = group.controls.password.value;

  return pass === confirmPass ? null : { notSame: true }     
}

onSubmit() : void {
    console.log(this.registerForm);
    this.authService.registerUser(this.registerForm)
}
}
