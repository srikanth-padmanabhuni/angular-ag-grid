
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SimpleGridComponent } from './components/simple-grid/simple-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
import { CrudGridComponent } from './components/crud-grid/crud-grid.component';
import { FormsModule } from '@angular/forms';
import { ButtonRendereComponent } from './components/button-rendere/button-rendere.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleGridComponent,
    HeaderComponent,
    FooterComponent,
    CrudGridComponent,
    ButtonRendereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
