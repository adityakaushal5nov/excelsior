import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsCseComponent } from './professors-cse.component';

describe('ProfessorsCseComponent', () => {
  let component: ProfessorsCseComponent;
  let fixture: ComponentFixture<ProfessorsCseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorsCseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
