import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLoginComponent } from './screens/pages-login/pages-login.component';
import { PagesRegisterComponent } from './screens/pages-register/pages-register.component';
import { UsersProfileComponent } from './screens/users-profile/users-profile.component';
import {ActorsComponent} from "./screens/actors/actors.component";
import {UserStoriesComponent} from "./screens/user-stories/user-stories.component";
import {UseCasesComponent} from "./screens/use-cases/use-cases.component";
import {UseCaseDiagramComponent} from "./screens/use-case-diagram/use-case-diagram.component";
import {GlossaryComponent} from "./screens/glossary/glossary.component";
import {ScreenFlowDiagramsComponent} from "./screens/screen-flow-diagrams/screen-flow-diagrams.component";
import {ScreenMockupsComponent} from "./screens/screen-mockups/screen-mockups.component";
import {ActorDetailsComponent} from "./screens/actors/actor-details/actor-details.component";
import {GlossaryDetailsComponent} from "./screens/glossary/glossary-details/glossary-details.component";
import {UserStoryDetailsComponent} from "./screens/user-stories/user-story-details/user-story-details.component";
import {UseCaseDetailsComponent} from "./screens/use-cases/use-case-details/use-case-details.component";
import {
  UseCaseDiagramCanvasComponent
} from "./screens/use-case-diagram/use-case-diagram-canvas/use-case-diagram-canvas.component";
import {
  ScreenFlowDiagramDetailsComponent
} from "./screens/screen-flow-diagrams/screen-flow-diagram-details/screen-flow-diagram-details.component";
import {
  ScreenMockupDetailsComponent
} from "./screens/screen-mockups/screen-mockup-details/screen-mockup-details.component";
import {RequirementsComponent} from "./screens/requirements/requirements.component";
import {RequirementDetailsComponent} from "./screens/requirements/requirement-details/requirement-details.component";
import {PagesError404Component} from "./screens/pages-error404/pages-error404.component";

const routes: Routes = [
  { path: '', component: RequirementsComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'user-stories', component: UserStoriesComponent },
  { path: 'user-story-details', component: UserStoryDetailsComponent},
  { path: 'actors', component: ActorsComponent },
  { path: 'use-cases', component: UseCasesComponent },
  { path: 'use-case-details', component: UseCaseDetailsComponent },
  { path: 'use-case-diagrams', component: UseCaseDiagramComponent },
  { path: 'use-case-diagram-canvas', component: UseCaseDiagramCanvasComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'screen-flow-diagrams', component: ScreenFlowDiagramsComponent },
  { path: 'screen-mockups', component: ScreenMockupsComponent },
  { path: 'actor-details', component: ActorDetailsComponent },
  { path: 'glossary-details', component: GlossaryDetailsComponent },
  { path: 'screen-flow-diagram-details', component: ScreenFlowDiagramDetailsComponent },
  { path: 'screen-mockup-details', component: ScreenMockupDetailsComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'requirement-details', component: RequirementDetailsComponent },
  { path: 'error404', component: PagesError404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
