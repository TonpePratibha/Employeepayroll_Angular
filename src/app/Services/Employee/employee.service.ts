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


  getEmployees(){
    let headers={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       
  
      })
  
    };
    return this.http.getService("https://localhost:7138/api/employee",headers);
  }

  deleteEmployee(id: number) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.deleteService(`https://localhost:7138/api/employee/${id}`, headers);
  }
  
  updateEmployee(id: number, reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.putService(`https://localhost:7138/api/employee/${id}`, reqData, headers);
  }
  // getEmployeeById(id: number) {
  //   let headers = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   return this.http.getServiceById(`https://localhost:7138/api/employee/${id}`, headers);
  // }
  
  getEmployeeById(id: number) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
  
    const url = `https://localhost:7138/api/employee/${id}`;
    return this.http.getServiceById(url, headers);
  }
}  



