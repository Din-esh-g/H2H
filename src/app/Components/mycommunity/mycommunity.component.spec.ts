import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommunityComponent } from './mycommunity.component';

describe('MycommunityComponent', () => {
  let component: MycommunityComponent;
  let fixture: ComponentFixture<MycommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
