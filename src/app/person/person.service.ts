import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverurl } from '../serverurl';
import { Observable, of } from 'rxjs';
import { PersonInfo } from './person.model';
import { ShortPersonInfo } from './person-short.model';
import { Membership } from './membership-list/membership.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getMembersList(guid: string): Observable<PersonInfo[]>{
    const url = serverurl + "Group/Members/?groupGuid=" + guid;
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

  postMembership(membership: Membership){
    const url = serverurl + "Person/AddMembership";
    return this.http.post<any>(url, membership);
  }

  searchPeople(name: string): Observable<ShortPersonInfo[]>{
    name = name.trim();
    if (!name) return of([]);
    const url = serverurl + "Person/NamesByStart?start="+name;
    return this.http.get<ShortPersonInfo[]>(url);
  }

  getMemberships(guid: string): Observable<Membership[]>{
    const url = serverurl + "Person/Memberships/?guid=" + guid;
    return this.http.get<Membership[]>(url);
  }
}
