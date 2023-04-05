import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseDiagramComponent } from './use-case-diagram.component';

describe('UseCaseDiagramComponent', () => {
  let component: UseCaseDiagramComponent;
  let fixture: ComponentFixture<UseCaseDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCaseDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
