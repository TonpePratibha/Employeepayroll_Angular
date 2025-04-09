import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  PostService(reqUrl: string, reqData: any, httpOptions: any = {}) {
       console.log("POST Request URL:", reqUrl); 
  console.log("POST Request Data:", reqData); 
    return this.httpClient.post(reqUrl, reqData, httpOptions);
  }
  

  getService(url: string,httpOptions: any = {}) {
    return this.httpClient.get(url,httpOptions );
  }

  deleteService(url: string, httpOptions: any = {}) {
    return this.httpClient.delete(url, httpOptions);
  }


  putService(reqUrl: string, reqData: any, httpOptions: any = {}) {
    console.log("PUT Request URL:", reqUrl);
    console.log("PUT Request Data:", reqData);
    return this.httpClient.put(reqUrl, reqData, httpOptions);
  }
  
  getServiceById(url: string, httpOptions: any = {}) {
    return this.httpClient.get(url, httpOptions);
  }
  

}
