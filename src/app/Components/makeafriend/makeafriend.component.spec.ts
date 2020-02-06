import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeafriendComponent } from './makeafriend.component';

describe('MakeafriendComponent', () => {
  let component: MakeafriendComponent;
  let fixture: ComponentFixture<MakeafriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeafriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeafriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
