import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicForm';
  isLoggedIn: any;
  constructor(private auth: AuthService) {
    this.isLoggedIn = this.auth.getAuthStatus();
  }

}
