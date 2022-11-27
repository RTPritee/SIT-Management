import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormApiService {
  baseUrl = 'http://172.16.213.107:8000'; 
  httpData: any;
  constructor( private http: HttpClient) { }
  ngOnInit(){
    
  }
  callApi(){
    return this.http.get<any>(this.baseUrl+'/get_demo');
  }
  

}
