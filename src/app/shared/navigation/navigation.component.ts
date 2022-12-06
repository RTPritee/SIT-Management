import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isLoggedIn: BehaviorSubject<boolean>;
  constructor(public auth: AuthService, private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn = new BehaviorSubject(isLoggedIn);
  }
  loginStatus: boolean = false;
  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
  }
  // login() {
  //   localStorage.setItem('loggedIn', 'true');
  //   this.isLoggedIn.next(true);
  //   // this.router.navigate(['/login']);
  // }

  // logout() {
  //   // logic
  //   localStorage.setItem('loggedIn', 'false');
  //   this.isLoggedIn.next(false);
  // }

  logout(){
    sessionStorage.setItem("isLoggedIn","false")
  }

}
