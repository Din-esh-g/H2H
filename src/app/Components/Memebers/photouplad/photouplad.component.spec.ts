import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoupladComponent } from './photouplad.component';

describe('PhotoupladComponent', () => {
  let component: PhotoupladComponent;
  let fixture: ComponentFixture<PhotoupladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoupladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoupladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
