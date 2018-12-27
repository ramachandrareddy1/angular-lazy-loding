import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', loadChildren: './eager/eager.module#eagerModule'},
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
