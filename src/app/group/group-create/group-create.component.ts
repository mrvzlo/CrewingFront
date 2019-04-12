import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { GroupComponent } from '../group.component';
import { GroupCreation } from './group-creation.model';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  model: GroupCreation = new GroupCreation;
  errors: string;

  constructor(private groupService: GroupService, private groupView: GroupComponent) { }

  ngOnInit() {
  }

  create(){
    this.groupService.createGroup(this.model).subscribe(
      res => {
        if (res.success){
          this.groupView.showGroups();
          this.groupView.hide();
        }else{
          this.errors = res.result.Errors.Name;
        }
      }
    ); 
  }
  
  cancel(){
    this.model = null;
    this.errors = "";
    this.groupView.hide();
  }
}
