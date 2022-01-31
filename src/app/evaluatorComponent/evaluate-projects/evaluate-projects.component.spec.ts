import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateProjectsComponent } from './evaluate-projects.component';

describe('EvaluateProjectsComponent', () => {
  let component: EvaluateProjectsComponent;
  let fixture: ComponentFixture<EvaluateProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
