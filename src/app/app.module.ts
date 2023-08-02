import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {UsersProfileComponent} from './screens/users-profile/users-profile.component';
import {PagesContactComponent} from './screens/pages-contact/pages-contact.component';
import {PagesRegisterComponent} from './screens/pages-register/pages-register.component';
import {PagesLoginComponent} from './screens/pages-login/pages-login.component';
import {PagesError404Component} from './shared/pages-error404/pages-error404.component';
import {UserStoriesComponent} from './screens/user-stories/user-stories.component';
import {ActorsComponent} from './screens/actors/actors.component';
import {UseCaseDiagramComponent} from './screens/use-case-diagram/use-case-diagram.component';
import {UseCasesComponent} from './screens/use-cases/use-cases.component';
import {GlossaryComponent} from './screens/glossary/glossary.component';
import {ScreenFlowDiagramsComponent} from './screens/screen-flow-diagrams/screen-flow-diagrams.component';
import {ScreenMockupsComponent} from './screens/screen-mockups/screen-mockups.component';
import {ActorDetailsComponent} from './screens/actors/actor-details/actor-details.component';
import {GlossaryDetailsComponent} from './screens/glossary/glossary-details/glossary-details.component';
import {UserStoryDetailsComponent} from './screens/user-stories/user-story-details/user-story-details.component';
import {UseCaseDetailsComponent} from './screens/use-cases/use-case-details/use-case-details.component';
import {CustomFormComponent} from './shared/form/form.component';
import {GridModule, PagerModule} from '@syncfusion/ej2-angular-grids';
import {DiagramModule, SymbolPaletteModule} from "@syncfusion/ej2-angular-diagrams";
import {
  UseCaseDiagramCanvasComponent
} from './screens/use-case-diagram/use-case-diagram-canvas/use-case-diagram-canvas.component';
import {
  ScreenFlowDiagramDetailsComponent
} from './screens/screen-flow-diagrams/screen-flow-diagram-details/screen-flow-diagram-details.component';
import {
  ScreenMockupDetailsComponent
} from './screens/screen-mockups/screen-mockup-details/screen-mockup-details.component';
import {RequirementsComponent} from './screens/requirements/requirements.component';
import {RequirementDetailsComponent} from './screens/requirements/requirement-details/requirement-details.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {BsModalService} from "ngx-bootstrap/modal";
import {ComponentLoaderFactory} from "ngx-bootstrap/component-loader";
import {PositioningService} from "ngx-bootstrap/positioning";
import {FormsModule} from "@angular/forms";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {FlowDiagramComponent} from './shared/components/flow-diagram/flow-diagram.component';
import {FlowDiagramDetailsComponent} from './screens/use-cases/flow-diagram-details/flow-diagram-details.component';
import {
  LogicConditionComponent
} from './screens/use-cases/flow-diagram-details/logic-condition/logic-condition.component';
import {UseCaseRequirementsComponent} from './screens/use-cases/use-case-requirements/use-case-requirements.component';
import {TableComponent} from './shared/table/table.component';
import {BaseScreenComponent} from './shared/base-screen/base-screen.component';
import {DangerDialogComponent} from './shared/danger-dialog/danger-dialog.component';
import {NavTabComponent} from './shared/nav-tab/nav-tab.component';
import {Tab1Component} from './screens/screen-mockups/tab1/tab1.component';
import {LogicalFlowComponent} from './shared/components/logical-flow/logical-flow.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {QuillModule} from "ngx-quill";
import {FlowDetailsComponent} from './screens/use-cases/flow-details/flow-details.component';
import {ItemsDetailsComponent} from './screens/use-cases/items-details/items-details.component';
import {UsItemDetailsComponent} from './screens/user-stories/us-item-details/us-item-details.component';
import {UsStoryDetailsComponent} from './screens/user-stories/us-story-details/us-story-details.component';
import {
  UsDescriptionDetailsComponent
} from './screens/user-stories/us-description-details/us-description-details.component';
import {UsCommentsDetailsComponent} from './screens/user-stories/us-comments-details/us-comments-details.component';
import {
  UsAttachementsDetailsComponent
} from './screens/user-stories/us-attachements-details/us-attachements-details.component';
import {UsOverviewDetailsComponent} from './screens/user-stories/us-overview-details/us-overview-details.component';
import {UsHistoryDetailsComponent} from './screens/user-stories/us-history-details/us-history-details.component';
import {ADescriptionComponent} from './screens/actors/a-description/a-description.component';
import {AGoalsComponent} from './screens/actors/a-goals/a-goals.component';
import {AHistoryComponent} from './screens/actors/a-history/a-history.component';
import {AOverviewComponent} from './screens/actors/a-overview/a-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UsersProfileComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    UserStoriesComponent,
    ActorsComponent,
    UseCaseDiagramComponent,
    UseCasesComponent,
    GlossaryComponent,
    ScreenFlowDiagramsComponent,
    ScreenMockupsComponent,
    ActorDetailsComponent,
    GlossaryDetailsComponent,
    UserStoryDetailsComponent,
    UseCaseDetailsComponent,
    CustomFormComponent,
    UseCaseDiagramCanvasComponent,
    ScreenFlowDiagramDetailsComponent,
    ScreenMockupDetailsComponent,
    RequirementsComponent,
    RequirementDetailsComponent,
    FlowDiagramComponent,
    FlowDiagramDetailsComponent,
    LogicConditionComponent,
    LogicConditionComponent,
    UseCaseRequirementsComponent,
    TableComponent,
    BaseScreenComponent,
    DangerDialogComponent,
    NavTabComponent,
    Tab1Component,
    LogicalFlowComponent,
    FlowDetailsComponent,
    ItemsDetailsComponent,
    ItemsDetailsComponent,
    UsItemDetailsComponent,
    UsStoryDetailsComponent,
    UsDescriptionDetailsComponent,
    UsCommentsDetailsComponent,
    UsAttachementsDetailsComponent,
    UsOverviewDetailsComponent,
    UsHistoryDetailsComponent,
    ADescriptionComponent,
    AGoalsComponent,
    AHistoryComponent,
    AOverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule, PagerModule, SymbolPaletteModule, DiagramModule,
    SimpleNotificationsModule.forRoot(), CollapseModule,
    FormsModule,
    AngularMultiSelectModule,
    DragDropModule,
    QuillModule.forRoot(),
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
