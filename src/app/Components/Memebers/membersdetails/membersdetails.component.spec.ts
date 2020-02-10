import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersdetailsComponent } from './membersdetails.component';

describe('MembersdetailsComponent', () => {
  let component: MembersdetailsComponent;
  let fixture: ComponentFixture<MembersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
