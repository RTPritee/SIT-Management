import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicForm';
  isLoggedIn= false ;
  constructor(private auth: AuthService) {
    // let temp = this.auth.getAuthStatus();
    let temp = sessionStorage.getItem("isLoggedIn")
    // console.log("temp " + temp);
    
    if(temp?.match( "true")){
      this.isLoggedIn = true;
      console.log("matched true");
      
    }
    if(temp?.match("false")){
      this.isLoggedIn = false
      console.log("matched false");
      
      
    }
    
    console.log("isLoggedIn: "+ this.isLoggedIn);
    
  }

}
