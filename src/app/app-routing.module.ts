import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then((module) => module.DashboardModule)},
  { path: 'bookmarks', loadChildren: () => import('./components/bookmarks/bookmarks.module').then((module) => module.BookmarksModule)},
  { path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
