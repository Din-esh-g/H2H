import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoeditorComponent } from './photoeditor.component';

describe('PhotoeditorComponent', () => {
  let component: PhotoeditorComponent;
  let fixture: ComponentFixture<PhotoeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
