import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverurl } from '../serverurl';
import { Observable, of } from 'rxjs';
import { PersonInfo } from './person.model';
import { ShortPersonInfo } from './person-short.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getMembersList(guid: string): Observable<PersonInfo[]>{
    const url = serverurl + "Group/Members/?groupGuid=" + guid;
    return this.http.get<PersonInfo[]>(url);
  }  
  
  getOnwersList(guid: string): Observable<PersonInfo[]>{
    const url = serverurl + "Group/Owners/?groupGuid=" + guid;
    return this.http.get<PersonInfo[]>(url);
  }

  getPerson(guid: string): Observable<PersonInfo>{
    const url = serverurl + "Person/Info/?guid=" + guid;
    return this.http.get<PersonInfo>(url);
  }

  postPerson(person: PersonInfo){
    const url = serverurl + "Person/ChangeInfo";
    return this.http.post<any>(url, person);
  }

  searchPeople(name: string): Observable<ShortPersonInfo[]>{
    name = name.trim();
    if (!name) return of([]);
    const url = serverurl + "Person/GetNamesByStart?start="+name;
    return this.http.get<ShortPersonInfo[]>(url);
  }
}
