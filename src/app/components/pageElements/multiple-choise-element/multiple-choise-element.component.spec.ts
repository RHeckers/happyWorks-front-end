import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiseElementComponent } from './multiple-choise-element.component';

describe('MultipleChoiseElementComponent', () => {
  let component: MultipleChoiseElementComponent;
  let fixture: ComponentFixture<MultipleChoiseElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiseElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
