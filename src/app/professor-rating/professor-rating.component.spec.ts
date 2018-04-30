import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRatingComponent } from './professor-rating.component';

describe('ProfessorRatingComponent', () => {
  let component: ProfessorRatingComponent;
  let fixture: ComponentFixture<ProfessorRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
