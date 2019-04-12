import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  isAdmin(){
    return localStorage.getItem('role') == "Admin";
  }

  isManager(){
    return localStorage.getItem('role') == "Manager";
  }

  isCaptain(){
    return localStorage.getItem('role') == "Captain";
  }

  isManagerOrH(){
    return this.isAdmin() || this.isManager();
  }

  isCaptainOrH(){
    return this.isCaptainOrH() || this.isCaptain();
  }
}
