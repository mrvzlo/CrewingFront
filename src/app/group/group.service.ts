import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group.model';
import { serverurl } from '../serverurl';
import { GroupCreation } from './group-create/group-creation.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) { }

  getGroupList(): Observable<Group[]>{
    const url = serverurl + "Group/List";
    return this.http.get<Group[]>(url);
  }  
  
  getGroupNames(): Observable<string[]>{
    const url = serverurl + "Group/Names";
    return this.http.get<string[]>(url);
  }

  getGroup(name: string): Observable<Group>{
    const url = serverurl + "Group/Info?name=" + name;
    return this.http.get<Group>(url);
  }

  createGroup(model: GroupCreation){
    const url = serverurl + "Group/Create";
    return this.http.post<any>(url, model);
  }

  removeGroup(name: string, guid: string){
    const url = serverurl + "Group/Remove?guid="+guid+"&name="+name;
    return this.http.post<any>(url, null);
  }
}
