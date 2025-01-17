import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupList: Group[];
  showGroupCreation: boolean;
  showGroupDeleting: boolean;
  removeable: string;

  constructor(private groupService: GroupService, private router: Router, public roleService: RoleService) { }

  showCreation(){
    this.showGroupCreation = true;
    this.showGroupDeleting = false;
  }

  ngOnInit() {
    this.showGroups();
  }

  hide(){
    this.showGroupDeleting = false;
    this.showGroupCreation = false;
  }

  showRemoving(guid: string){
    this.showGroupDeleting = true;
    this.showGroupCreation = false;
    this.removeable = guid;
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
