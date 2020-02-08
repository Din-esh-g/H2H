import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalycardComponent } from './dispalycard.component';

describe('DispalycardComponent', () => {
  let component: DispalycardComponent;
  let fixture: ComponentFixture<DispalycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispalycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
