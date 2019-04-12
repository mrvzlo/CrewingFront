import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRemoveComponent } from './group-remove.component';

describe('GroupRemoveComponent', () => {
  let component: GroupRemoveComponent;
  let fixture: ComponentFixture<GroupRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
