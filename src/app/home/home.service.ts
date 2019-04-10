import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverurl } from '../serverurl';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getVersion(): Observable<string>{
    const url = serverurl + "home/get";
    return this.http.get<string>(url);
  }
}
