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

const routes: Routes = [
  { path: '', component: UserStoriesComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'user-stories', component: UserStoriesComponent },
  { path: 'user-story-details', component: UserStoryDetailsComponent},
  { path: 'actors', component: ActorsComponent },
  { path: 'use-cases', component: UseCasesComponent },
  { path: 'use-case-details', component: UseCaseDetailsComponent },
  { path: 'use-case-diagrams', component: UseCaseDiagramComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'screen-flow-diagrams', component: ScreenFlowDiagramsComponent },
  { path: 'screen-mockups', component: ScreenMockupsComponent },
  { path: 'actor-details', component: ActorDetailsComponent },
  { path: 'glossary-details', component: GlossaryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
