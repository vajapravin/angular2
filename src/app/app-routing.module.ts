import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { dashboardRoutes } from './pages/dashboard/dashboard.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...dashboardRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }