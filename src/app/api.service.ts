import {Http} from '@angular/http'
import {Injectable} from '@angular/core'

@Injectable()
export class ApiService {
    constructor(private http:Http) {}
        messages=[]
   getMessages() {
       this.http.get('http://localhost:3000/posts').subscribe(res =>{
           this.messages=res.json()
       })
    }
}
