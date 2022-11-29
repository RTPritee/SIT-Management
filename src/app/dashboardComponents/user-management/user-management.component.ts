import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private au: AuthService) { }
  name = new FormControl('');
  job = new FormControl('');
  ngOnInit(): void {
  }
  
  userInfobtn(name: any, job : any) {
    return this.http.post<any>(this.au.baseUrl + "api/users",{"name":name, "job" : job}).subscribe(
      (en) => {
        console.log(en);
        // this.router.navigate(['/role']);
      }
    )
  }

}
