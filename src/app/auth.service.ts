import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
    messages = []
    path = environment.path+'/auth'
    TOKEN_KEY='token'
    constructor(private http: HttpClient) { }

    get token(){
        return localStorage.getItem(this.TOKEN_KEY)
    }
 get isAuthenticated(){
     return !!localStorage.getItem(this.TOKEN_KEY)
 }
 logout(){
     localStorage.removeItem(this.TOKEN_KEY)
 }
    registerUser(registeredData) {
       return this.http.post<any>(this.path + '/register' , registeredData).subscribe(res => {
           this.saveToken(res.token)

        })
    }

    loginUser(loginData) {
        this.http.post<any>(this.path + '/login' ,loginData).subscribe(res => {
            this.saveToken(res.token)
          console.log(loginData);
             //this.messages = res.json()
        })
    }
    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY,token)
    }
}
