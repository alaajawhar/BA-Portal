import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseDetailsComponent } from './use-case-details.component';

describe('UseCaseDetailsComponent', () => {
  let component: UseCaseDetailsComponent;
  let fixture: ComponentFixture<UseCaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
