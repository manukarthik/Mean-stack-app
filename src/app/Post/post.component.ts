import { Component } from '@angular/core';
import { ApiService } from "../api.service";
import {AuthService} from "../auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'post',
    templateUrl: './post.html'

})
export class PostComponent {

    constructor(private apiService: ApiService, private authService: AuthService, public snackBar: MatSnackBar) { }
    postMsg={
      id:'',
      msg:''
    }
    post() {
        this.apiService.postMessage(this.postMsg)
      console.log(this.postMsg)
        this.snackBar.open('You\'re post was sent', 'ok', {
            duration: 2000,
        });
    }

}
