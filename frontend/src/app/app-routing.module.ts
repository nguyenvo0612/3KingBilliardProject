import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AppComponent } from './app.component';
import { TableComponentComponent } from './pages/table.component/table.component';

const routes: Routes = [
  { path: '', component: TableComponentComponent },
  { path: 'home', component: HeaderComponent },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
