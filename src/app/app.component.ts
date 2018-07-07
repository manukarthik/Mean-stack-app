import { Component } from '@angular/core';
import { ApiService } from "./api.service";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  styleUrls:['./app.css'],
  templateUrl:'app.component.html',
})
export class AppComponent {
  TOKEN_KEY = 'token'
  profile

  /* ngOnInit() {
  var resu = this.authService.token
    console.log(resu.split('.')[0]);
    var pro = this.apiService.getProfile(resu).subscribe(data => this.profile = data)
    console.log(this.profile)
  } */

  constructor(private authService: AuthService, private apiService: ApiService) { }
  title = 'app';
  public user
ngOnInit(){
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 var tok=this.authService.token
console.log(tok)


}
}
