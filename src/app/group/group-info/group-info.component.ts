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

  @Input() group: Group;
  members: PersonInfo[];
  owners: PersonInfo[];

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
      this.getOwners();
      this.getMembers();
    });
  }

  getMembers(){
    this.personService.getMembersList(this.group.Guid).subscribe(res => this.members = res);
  }

  getOwners(){
    this.personService.getOnwersList(this.group.Guid).subscribe(res => this.owners = res);
  }

  goBack(): void {
    this.location.back();
  }
}
