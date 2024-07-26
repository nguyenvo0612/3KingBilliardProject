import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AppComponent } from './app.component';
import { TableComponentComponent } from './pages/table.component/table.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import {LoginComponentComponent} from './pages/login.component/login.component';

const routes: Routes = [
  { path: '', component: TableComponentComponent },
  { path: 'home', component: HeaderComponent },
  { path: '', component: HeaderComponent },
  { path: 'kk', component: NavigationComponent },
  {path: 'login', component: LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
