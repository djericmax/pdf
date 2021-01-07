import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerapdfComponent } from './components/gerapdf/gerapdf.component';


const routes: Routes = [
  {path: '', redirectTo: 'tree', pathMatch: 'full'},
  {path: '', component: GerapdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
