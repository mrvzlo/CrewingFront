import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupList: Group[];

  constructor(private groupService: GroupService, private router: Router) { }

  ngOnInit() {
    this.showGroups();
  }

  showGroups(){
    this.groupService.getGroupList().subscribe(
      res => this.groupList = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401) this.router.navigate(['account']);
        }
      }
    );
  }
}
