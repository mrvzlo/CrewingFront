import { Component, OnInit } from '@angular/core';
import { ShortPersonInfo } from '../person-short.model';
import { PersonService } from '../person.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss']
})
export class PersonSearchComponent implements OnInit {

  people$: Observable<ShortPersonInfo[]>;
  private searchTerms = new Subject<string>();

  constructor(private personService: PersonService) { }

  search(name: string): void {
    this.searchTerms.next(name);
  }

  ngOnInit() {
    this.people$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: string) => this.personService.searchPeople(name)),
    );
  }
}
