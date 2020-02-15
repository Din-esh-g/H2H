import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagethreadadComponent } from './messagethreadad.component';

describe('MessagethreadadComponent', () => {
  let component: MessagethreadadComponent;
  let fixture: ComponentFixture<MessagethreadadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagethreadadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagethreadadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
