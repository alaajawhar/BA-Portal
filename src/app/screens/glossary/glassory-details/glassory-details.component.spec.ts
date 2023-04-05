import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassoryDetailsComponent } from './glassory-details.component';

describe('GlassoryDetailsComponent', () => {
  let component: GlassoryDetailsComponent;
  let fixture: ComponentFixture<GlassoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassoryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
