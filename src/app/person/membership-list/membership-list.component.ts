import { Component, OnInit } from '@angular/core';
import { Membership } from './membership.model';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupService } from 'src/app/group/group.service';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.scss']
})
export class MembershipListComponent implements OnInit {

  list: Membership[];
  model: Membership = new Membership;
  groups: string[];
  loaded = false;
  errors: string[];

  constructor(private personService: PersonService, private route: ActivatedRoute, private groupService: GroupService, private router: Router) { }

  ngOnInit() {
    this.showMemberships();
    this.showGroups();
  }

  showMemberships(){
    const guid = this.route.snapshot.paramMap.get('guid');
    this.model.PersonGuid = guid;
    this.personService.getMemberships(guid).subscribe(res => {
      this.list = res
      this.loaded = true
    }, err => this.loaded = true);
  }

  showGroups(){
    this.groupService.getGroupNames().subscribe(
      res => this.groups = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401) this.router.navigate(['account']);
        }
      }
    );
  }

  add(){
    this.personService.postMembership(this.model).subscribe(
      res => {
        if (res.success){
          this.showMemberships();
          this.errors = [];
        }else{
          this.errors = [res.errors.Sum, res.errors.ActiveFrom, res.errors.GroupName];
        }
        console.log(res);
      }
    ); 
  }
}
