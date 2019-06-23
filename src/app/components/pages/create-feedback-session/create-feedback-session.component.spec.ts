import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedbackSessionComponent } from './create-feedback-session.component';

describe('CreateFeedbackSessionComponent', () => {
  let component: CreateFeedbackSessionComponent;
  let fixture: ComponentFixture<CreateFeedbackSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeedbackSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeedbackSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
