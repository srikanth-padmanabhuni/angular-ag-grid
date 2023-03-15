import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudGridComponent } from './components/crud-grid/crud-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SimpleGridComponent } from './components/simple-grid/simple-grid.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'simple-grid',
    component: SimpleGridComponent
  },
  {
    path: 'crud',
    component: CrudGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
