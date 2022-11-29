import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  public logInForm !: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  login(username: any, password: any) {
    this.auth.login(username, password);
  }
  
}
