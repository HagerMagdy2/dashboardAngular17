import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ViewPropertiesComponent } from './components/view-properties/view-properties.component';

export const routes: Routes = [
  { path: '',pathMatch:'full', redirectTo:'Charts' },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'Sidebar', component: SidebarComponent },
  { path: 'Card', component: CardComponent },
  { path: 'Stationlist', component: StationListComponent },
  { path: 'Charts', component: ChartsComponent },
  { path: 'Viewproperties', component:ViewPropertiesComponent}
];
