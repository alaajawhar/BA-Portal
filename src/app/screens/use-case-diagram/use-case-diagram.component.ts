import {Component, ViewEncapsulation, ViewChild, Inject, OnInit} from '@angular/core';
import {DiagramComponent} from '@syncfusion/ej2-angular-diagrams';
import {
  Diagram, NodeModel, UndoRedo, ConnectorModel, PointPortModel, Connector, FlowShapeModel,
  SymbolInfo, IDragEnterEventArgs, SnapSettingsModel, MarginModel, TextStyleModel, StrokeStyleModel,
  OrthogonalSegmentModel, Node, PaletteModel
} from '@syncfusion/ej2-diagrams';
import {ExpandMode} from '@syncfusion/ej2-navigations';
import {paletteIconClick} from './use-case-diagram-canvas/diagram-common';

Diagram.Inject(UndoRedo);

@Component({
  selector: 'app-use-case-diagram',
  templateUrl: './use-case-diagram.component.html',
  styleUrls: ['./use-case-diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UseCaseDiagramComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
}
