import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './screens/pages-contact/pages-contact.component';
import { PagesError404Component } from './screens/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
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
import {GlassoryDetailsComponent} from "./screens/glossary/glassory-details/glassory-details.component";
import {UserStoryDetailsComponent} from "./screens/user-stories/user-story-details/user-story-details.component";
import {UseCaseDetailsComponent} from "./screens/use-cases/use-case-details/use-case-details.component";

const routes: Routes = [
  { path: '', component: UserStoriesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
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
  { path: 'glassory-details', component: GlassoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
