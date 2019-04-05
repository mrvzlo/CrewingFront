import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) { }

  getGroupList(){
    return this.http.get("http://localhost:1785/Group/_GroupGrid");
  }
}
