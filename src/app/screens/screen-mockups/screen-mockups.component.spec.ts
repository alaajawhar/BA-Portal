import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMockupsComponent } from './screen-mockups.component';

describe('ScreenMockupsComponent', () => {
  let component: ScreenMockupsComponent;
  let fixture: ComponentFixture<ScreenMockupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenMockupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenMockupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
