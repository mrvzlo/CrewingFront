import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../group.component';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-remove',
  templateUrl: './group-remove.component.html',
  styleUrls: ['./group-remove.component.scss']
})
export class GroupRemoveComponent implements OnInit {

  name: string;
  errors: string;

  constructor(private groupView: GroupComponent, private groupService: GroupService) { }

  ngOnInit() {
  }

  delete(){
    var guid = this.groupView.removeable;
    
    this.groupService.removeGroup(this.name,guid).subscribe(
      res => {
        console.log(res);
        if (res.success){
          this.groupView.showGroups();
          this.groupView.hide();
        }else{
          this.errors = res.result.Errors.Sum;
        }
      }
    ); 
  }
}
