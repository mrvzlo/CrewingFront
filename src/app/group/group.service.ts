import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group.model';
import { serverurl } from '../serverurl';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) { }

  getGroupList(): Observable<Group[]>{
    const url = serverurl + "Group/List";
    return this.http.get<Group[]>(url);
  }

  getGroup(name: string): Observable<Group>{
    const url = serverurl + "Group/Info?name=" + name;
    return this.http.get<Group>(url);
  }
}
