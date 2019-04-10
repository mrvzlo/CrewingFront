import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  version: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.showVersion();
  }

  showVersion(){
    this.homeService.getVersion().subscribe(res => this.version = res);
  }
}
