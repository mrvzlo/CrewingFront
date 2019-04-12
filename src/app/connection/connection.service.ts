import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  connected: boolean = true;

  constructor() { }

  changeStatus(status: boolean){
    this.connected = status;
  }
}
