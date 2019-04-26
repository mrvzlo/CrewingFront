import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonInfo } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: PersonInfo;

  success: boolean;
  errors: string;

  constructor(private personService: PersonService, 
    private route: ActivatedRoute, 
    private location: Location) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const guid = this.route.snapshot.paramMap.get('guid');
    this.personService.getPerson(guid).subscribe(res => {
      this.person = res
      if (res == null){
        this.success = false;
        this.errors = "You have no access or record was not found";
      }
    });
  }

  update(){
    this.personService.postPerson(this.person).subscribe(
      res => {
        if (res.success){
          this.success = true;
        }else{
          this.success = false;
          this.errors = res.result.Errors.Sum;
        }
      }
    ); 
  }
  
  hideSuccess(){
    this.success = false;
  }

  goBack(): void {
    this.location.back();
  }
}
