import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpService) {}

  Register(reqData: any) {
    let headers = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' 
      })
    };
    return this.http.PostService('https://localhost:7138/api/employee/register', reqData, headers);
  }
}
