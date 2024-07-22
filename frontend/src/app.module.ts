import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/component/header/header.component';
import { FooterComponent } from './app/component/footer/footer.component';

import { ContentComponent } from './app/pages/content/content.component';
import { SidebarComponent } from './app/component/sidebar/sidebar.component';
import { NavigationComponent } from './app/component/navigation/navigation.component';
import { TableComponentComponent } from './app/pages/table.component/table.component';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from 'primeng/dragdrop';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';






                                



@NgModule({
  declarations: [
    TableComponentComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    NavigationComponent,
    TableComponentComponent,
  ],
  imports: [
    InputNumberModule,
    TableModule,
    CardModule,
    TabViewModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [TableComponentComponent],
})
export class AppModule {}
