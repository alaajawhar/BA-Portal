import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFlowDiagramsComponent } from './screen-flow-diagrams.component';

describe('ScreenFlowDiagramsComponent', () => {
  let component: ScreenFlowDiagramsComponent;
  let fixture: ComponentFixture<ScreenFlowDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFlowDiagramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFlowDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
