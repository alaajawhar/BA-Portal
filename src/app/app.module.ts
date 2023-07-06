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
import {PagesError404Component} from './screens/pages-error404/pages-error404.component';
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
import {CustomFormComponent} from './components/custom-form/custom-form.component';
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
import {
  UserStoryDetailsItemComponent
} from './screens/user-stories/user-story-details/user-story-details-item/user-story-details-item.component';
import {TicketManagementComponent} from './components/ticket-management/ticket-management.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {TicketMenuComponent} from './components/ticket-management/ticket-menu/ticket-menu.component';
import {BsModalService} from "ngx-bootstrap/modal";
import {ComponentLoaderFactory} from "ngx-bootstrap/component-loader";
import {PositioningService} from "ngx-bootstrap/positioning";
import {FormsModule} from "@angular/forms";

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
    UserStoryDetailsItemComponent,
    TicketManagementComponent,
    TicketMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule, PagerModule, SymbolPaletteModule, DiagramModule,
    SimpleNotificationsModule.forRoot(), CollapseModule,
    FormsModule
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
