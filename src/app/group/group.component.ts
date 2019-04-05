import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupList;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.showGroups();
  }

  showGroups(){
    this.groupService.getGroupList().subscribe((data) => this.groupList = data);
  }
}
