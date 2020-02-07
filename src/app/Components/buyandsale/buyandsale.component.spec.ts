import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyandsaleComponent } from './buyandsale.component';

describe('BuyandsaleComponent', () => {
  let component: BuyandsaleComponent;
  let fixture: ComponentFixture<BuyandsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyandsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyandsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
