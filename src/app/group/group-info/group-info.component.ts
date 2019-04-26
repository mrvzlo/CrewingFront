import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Group } from '../group.model';
import { GroupService } from 'src/app/group/group.service';
import { PersonService } from 'src/app/person/person.service';
import { PersonInfo } from 'src/app/person/person.model';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

  loaded = false;
  @Input() group: Group;
  members: PersonInfo[];

  constructor(private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location,
    private personService: PersonService) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.groupService.getGroup(name).subscribe(res => {
      this.group = res;
      this.getMembers();
      this.loaded = true;
    }, err => this.loaded = true);
  }

  getMembers(){
    this.personService.getMembersList(this.group.Guid).subscribe(res => {
      this.members = res
      console.log(res)
    });
  }

  goBack(): void {
    this.location.back();
  }
}
