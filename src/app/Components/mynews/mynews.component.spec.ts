import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewsComponent } from './mynews.component';

describe('MynewsComponent', () => {
  let component: MynewsComponent;
  let fixture: ComponentFixture<MynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
