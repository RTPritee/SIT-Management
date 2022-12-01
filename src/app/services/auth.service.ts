import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //baseUrl = 'https://reqres.in/api';
  baseUrl = 'https://retoolapi.dev/G0JfCi'
  public isLoggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router, private http: HttpClient) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn = new BehaviorSubject(isLoggedIn);
  }
  login(username: any, password: any) {
    sessionStorage.setItem("isLoggedIn", "true")
    return this.http.post<any>(this.baseUrl +
      "/login", { "username": username, "password": password }).subscribe(
        (token) => {
          if (token) {
            console.log(token);
            // localStorage.setItem('loggedIn', 'true');
            this.isLoggedIn.next(true);
            //  sessionStorage.setItem("isLoggedIn", "true")
            //this.isLoggedIn = true;
            this.router.navigate(['/form']);
           

          }
        }
      )
    // logic
    // localStorage.setItem('loggedIn', 'true');
    // this.isLoggedIn.next(true);
  }
  getAuthStatus() {
    var loginStatus = sessionStorage.getItem("isLoggedIn");
    if (loginStatus == "true") {
      return true
    }
    return false;
  }
  // logout() {
  //   var token = sessionStorage.getItem("token");
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Accept', '*/*',)
  //     .set('Authorization', 'Token ' + token)
  //     .set('Connection', 'keep-alive');

  //   return this.http.post<any>(this.baseUrl + "/logout", { headers: headers });
  // }
  logout(): void {
    this.isLoggedIn.next(false);
       localStorage.removeItem('isLoggedIn'); 
    }

}
